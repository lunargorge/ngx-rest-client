
import { Component, OnInit } from '@angular/core';

// tslint:disable
const postsCommentsComponentTs: string = require('!!raw-loader?lang=typescript!./../posts-comments.component.ts');
const postsCommentsComponentHtml: string = require('!!raw-loader?lang=typescript!./../posts-comments.component.html');
const postCommentEntityTs: string = require('!!raw-loader?lang=typescript!./../../shared/album-api/entity/post-comment.entity.ts');
const postCommentServiceTs: string = require('!!raw-loader?lang=typescript!./../../shared/album-api/service/post-comment.service.ts');

@Component({
    selector: 'app-posts-comments-doc',
    templateUrl: './posts-comments-doc.component.html',
    styleUrls: ['./posts-comments-doc.component.css']
})
export class PostsCommentsDocComponent implements OnInit {
    public postsCommentsComponentTs = postsCommentsComponentTs;
    public postsCommentsComponentHtml = postsCommentsComponentHtml;
    public postCommentEntityTs = postCommentEntityTs;
    public postCommentServiceTs = postCommentServiceTs;

    constructor() {
    }

    ngOnInit() {
    }

}
