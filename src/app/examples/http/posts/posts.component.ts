import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { ArrayCollection } from 'handy-data';
import { IQueryCriteria, QueryCriteriaPaginate, QueryCriteriaFullTextSearch} from '../../../../library'; // 'ngx-rest-client'

import { PostService } from '../shared/album-api/service/post.service';
import { PostEntity } from '../shared/album-api/entity/post.entity';
import { QueryCriteriaSort } from '../../../../library/http/query-criteria/criteria';
import { SortOrderType } from '../../../../library/http/query-criteria/criteria/sort';

// https://github.com/typicode/json-server

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    public posts: ArrayCollection<PostEntity> = new ArrayCollection<any>();
    public post: PostEntity = null;
    public message: string;
    public loading = false;
    // listing
    public partialEditionId: number;
    public searchPhrase: string;
    public arrayOfPages = [];
    protected page = 1;
    protected rowsLimit = 5;
    protected titleSortOrder: SortOrderType;

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        this.loadPosts();
    }

    public loadPosts(): void {
        this.post = null;
        this.partialEditionId = null;
        this.loading = true;
        this.postService.fetch(this.getCriteria(), {observe: 'response'}).subscribe((res: HttpResponse<ArrayCollection<PostEntity>>) => {
            this.createArrayPages(parseInt(res.headers.get('X-Total-Count'), 10));
            this.posts = res.body;
            this.loading = false;
        });
    }

    public changePage(val: number): void {
        this.page = val;
        this.loadPosts();
    }

    public changeRowsLimit(val: number): void {
        this.rowsLimit = val;
        this.changePage(1);
        this.loadPosts();
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
        this.partialEditionId = id;
        this.hideForm();
    }

    public editPost(id: string | number): void {
        this.loading = true;
        this.postService.fetchById(id).subscribe((res: PostEntity) => {
            this.post = res;
            this.partialEditionId = null;
            this.loading = false;
        });
    }

    public deletePost(id: string | number): void {
        this.loading = true;
        this.postService.delete(id).subscribe(() => {
            this.showMessage('Removed post, id: ' + id);
            this.changePage(1);
            this.loadPosts();
        });
    }

    public newPost(): void {
        this.post = new PostEntity();
        this.partialEditionId = null;
    }

    public hideForm(): void {
        this.post = null;
    }

    public savePost(): void {
        this.loading = true;
        this.postService.save(this.post).subscribe((res: PostEntity) => {
            this.post = null;
            this.showMessage('Saved post, id: ' + res.id);
            this.loadPosts();
        });
    }

    // example PATCH request
    public modifyPostTitle(post: PostEntity): void {
        this.loading = true;
        this.postService.modify(post.id, {title: post.title}).subscribe((res: PostEntity) => {
            this.showMessage('Modified title in post, id: ' + post.id);
            this.loadPosts();
        });
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
