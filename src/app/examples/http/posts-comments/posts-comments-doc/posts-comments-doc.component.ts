
import { Component, OnInit } from '@angular/core';

// tslint:disable
let postsCommentsComponentTs: string = require('!!raw-loader?lang=typescript!./../posts-comments.component.ts');
let postsCommentsComponentHtml: string = require('!!raw-loader?lang=typescript!./../posts-comments.component.html');
let postCommentEntityTs: string = require('!!raw-loader?lang=typescript!./../../shared/album-api/entity/post-comment.entity.ts');
let postCommentRepositoryTs: string = require('!!raw-loader?lang=typescript!./../../shared/album-api/repository/post-comment.repository.ts');
let postCommentServiceTs: string = require('!!raw-loader?lang=typescript!./../../shared/album-api/service/post-comment.service.ts');

@Component({
    selector: 'app-posts-comments-doc',
    templateUrl: './posts-comments-doc.component.html',
    styleUrls: ['./posts-comments-doc.component.css']
})
export class PostsCommentsDocComponent implements OnInit {
    public postsCommentsComponentTs = postsCommentsComponentTs;
    public postsCommentsComponentHtml = postsCommentsComponentHtml;
    public postCommentEntityTs = postCommentEntityTs;
    public postCommentRepositoryTs = postCommentRepositoryTs;
    public postCommentServiceTs = postCommentServiceTs;

    constructor() {
    }

    ngOnInit() {
    }

}
