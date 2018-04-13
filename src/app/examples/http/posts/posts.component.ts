
import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { ArrayCollection } from 'json2entity';

import { PostService } from '../shared/album-api/service/post.service';
import { PostEntity } from '../shared/album-api/entity/post.entity';

// 'ngx-rest-client'
import { QueryCriteriaSort, SortOrderType } from '../../../../library/http/query/criteria/sort';
import { IQueryCriteria } from '../../../../library/http/query/query-criteria.interface';
import { QueryCriteriaPaginate } from '../../../../library/http/query/criteria/paginate';
import { QueryCriteriaFullTextSearch } from '../../../../library/http/query/criteria/full-text-search';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    public posts: ArrayCollection<PostEntity> = new ArrayCollection<any>();
    public post: PostEntity = null;
    public editRowId: number;
    public searchPhrase: string;
    public page = 1;
    public rowsLimit = 5;
    public titleSortOrder: SortOrderType;

    public arrayOfPages = [];
    public message: string;
    public loading = false;

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        this.loadPosts();
    }

    // http GET
    public loadPosts(): void {
        this.post = null;
        this.editRowId = null;
        this.loading = true;
        this.postService.fetch(this.getCriteria(), {observe: 'response'}).subscribe((res: HttpResponse<ArrayCollection<PostEntity>>) => {
            this.createArrayPages(parseInt(res.headers.get('X-Total-Count'), 10));
            this.posts = res.body;
            this.loading = false;
        });
    }

    // http GET by ID
    public editPost(id: string | number): void {
        this.loading = true;
        this.postService.fetchById(id).subscribe((res: PostEntity) => {
            this.post = res;
            this.editRowId = null;
            this.loading = false;
        });
    }

    // http POST or PUT - depending on whether there is an ID
    public savePost(): void {
        this.loading = true;
        this.postService.save(this.post).subscribe((res: PostEntity) => {
            this.post = null;
            this.showMessage('Post has been saved, id: ' + res.id);
            this.loadPosts();
        });
    }

    // http PATCH
    public modifyPostTitle(post: PostEntity): void {
        this.loading = true;
        this.postService.modify(post.id, {title: post.title}).subscribe((res: PostEntity) => {
            this.showMessage('The title in the post has been modified, id: ' + post.id);
            this.loadPosts();
        });
    }

    // http DELETE
    public deletePost(id: string | number): void {
        this.loading = true;
        this.postService.delete(id).subscribe(() => {
            this.showMessage('Post was removed, id: ' + id);
            this.changePage(1);
            // this.loadPosts();
        });
    }

    public changePage(val: number): void {
        this.page = val;
        this.loadPosts();
    }

    public changeRowsLimit(val: number): void {
        this.rowsLimit = val;
        this.changePage(1);
        // this.loadPosts();
    }

    public setSearchPhrase(event: any): void {
        this.searchPhrase = event.target.value;
        this.loadPosts();
    }

    public sortByTitle(): void {
        this.titleSortOrder = (this.titleSortOrder === 'asc') ? 'desc' : 'asc';
        this.loadPosts();
    }

    public editPostTitle(id: number): void {
        this.editRowId = id;
        this.hideForm();
    }

    public newPost(): void {
        this.post = new PostEntity();
        this.editRowId = null;
    }

    public hideForm(): void {
        this.post = null;
    }

    protected showMessage(val: string): void {
        this.message = val;
        setTimeout(() => {
            this.message = null;
        }, 3000);
    }

    protected getCriteria(): ArrayCollection<IQueryCriteria> {
        const criteria = new ArrayCollection<IQueryCriteria>();

        // you can use ...
        // QueryCriteriaFilter
        // QueryCriteriaFullTextSearch
        // QueryCriteriaOperator
        // QueryCriteriaPaginate
        // QueryCriteriaRelationshipEmbed
        // QueryCriteriaRelationshipExpand
        // QueryCriteriaSlice
        // QueryCriteriaSort
        // ... or implement your own Criteria

        criteria.add(new QueryCriteriaPaginate(this.page, this.rowsLimit));

        if (this.searchPhrase) {
            criteria.add(new QueryCriteriaFullTextSearch(this.searchPhrase));
        }

        if (this.titleSortOrder) {
            criteria.add(new QueryCriteriaSort('title', this.titleSortOrder));
        }

        return criteria;
    }

    protected createArrayPages(xTotalCount: number): void {
        this.arrayOfPages = [];
        const totalPages = Math.ceil(xTotalCount / this.rowsLimit);
        for (let i = 1; i <= totalPages; i++) {
            this.arrayOfPages.push(i);
        }
    }
}
