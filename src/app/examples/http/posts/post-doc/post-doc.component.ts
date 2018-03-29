import { Component, OnInit } from '@angular/core';

// tslint:disable
const albumApiModuleTs: string = require('!!raw-loader?lang=typescript!./../../shared/album-api/album-api.module.ts');
const postsComponentTs: string = require('!!raw-loader?lang=typescript!./../posts.component.ts');
const postsComponentHtml: string = require('!!raw-loader?lang=typescript!./../posts.component.html');
const postEntityTs: string = require('!!raw-loader?lang=typescript!./../../shared/album-api/entity/post.entity.ts');
const postRepositoryTs: string = require('!!raw-loader?lang=typescript!./../../shared/album-api/repository/post.repository.ts');
const postServiceTs: string = require('!!raw-loader?lang=typescript!./../../shared/album-api/service/post.service.ts');

@Component({
    selector: 'app-post-doc',
    templateUrl: './post-doc.component.html',
    styleUrls: ['./post-doc.component.css']
})
export class PostDocComponent implements OnInit {
    public albumApiModuleTs = albumApiModuleTs;
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
