import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientRoutingModule } from './http-client-routing.module';
import { PostsComponent } from './posts/posts.component';
import { PostsCommentsComponent } from './posts-comments/posts-comments.component';
import { HttpClientComponent } from './http-client.component';
import { DocComponent } from './doc/doc.component';
import { SharedModule } from '../shared/shared.module';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';
import { PostDocComponent } from './posts/post-doc/post-doc.component';
import { QueryCriteriaComponent } from './query-criteria/query-criteria.component';
import { PostsCommentsDocComponent } from './posts-comments/posts-comments-doc/posts-comments-doc.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientRoutingModule,
        Ng2HandySyntaxHighlighterModule,
        SharedModule
    ],
    declarations: [
        PostsComponent,
        PostDocComponent,
        PostsCommentsComponent,
        HttpClientComponent,
        DocComponent,
        PostDocComponent,
        QueryCriteriaComponent,
        PostsCommentsDocComponent
    ]
})
export class HttpClientModule {
}
