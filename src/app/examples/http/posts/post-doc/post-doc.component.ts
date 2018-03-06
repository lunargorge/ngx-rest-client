import { Component, OnInit } from '@angular/core';

// tslint:disable
let postsComponentTs: string = require('!!raw-loader?lang=typescript!./../posts.component.ts');
let postsComponentHtml: string = require('!!raw-loader?lang=typescript!./../posts.component.html');
let postEntityTs: string = require('!!raw-loader?lang=typescript!./../../shared/album-api/entity/post.entity.ts');
let postRepositoryTs: string = require('!!raw-loader?lang=typescript!./../../shared/album-api/repository/post.repository.ts');
let postServiceTs: string = require('!!raw-loader?lang=typescript!./../../shared/album-api/service/post.service.ts');

@Component({
    selector: 'app-post-doc',
    templateUrl: './post-doc.component.html',
    styleUrls: ['./post-doc.component.css']
})
export class PostDocComponent implements OnInit {
    public postsComponentTs = postsComponentTs;
    public postsComponentHtml = postsComponentHtml;
    public postEntityTs = postEntityTs;
    public postRepositoryTs = postRepositoryTs;
    public postServiceTs = postServiceTs;

    constructor() {
    }

    ngOnInit() {
    }

}
