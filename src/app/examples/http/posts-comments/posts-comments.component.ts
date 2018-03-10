
import { Component, OnInit } from '@angular/core';

import { ArrayCollection } from 'handy-data';

import { PostCommentEntity } from '../shared/album-api/entity/post-comment.entity';
import { PostCommentService } from '../shared/album-api/service/post-comment.service';

@Component({
    selector: 'app-posts-comments',
    templateUrl: './posts-comments.component.html',
    styleUrls: ['./posts-comments.component.css']
})
export class PostsCommentsComponent implements OnInit {
    public postComments: ArrayCollection<PostCommentEntity> = new ArrayCollection<any>();
    public postId: number | string = 1;

    constructor(private postCommentService: PostCommentService) {
    }

    ngOnInit() {
        this.loadPostComments();
    }

    public loadPostComments(): void {
        this.postCommentService.setParentResourceParams(this.postId).fetch()
            .subscribe((res: ArrayCollection<PostCommentEntity>) => {
                this.postComments = res;
            });
    }

    public setPostId(id: number | string): void {
        this.postId = id;
        this.loadPostComments();
    }
}
