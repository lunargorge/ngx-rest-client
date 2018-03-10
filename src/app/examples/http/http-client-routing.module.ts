import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientComponent } from './http-client.component';
import { DocComponent } from './doc/doc.component';
import { PostsComponent } from './posts/posts.component';
import { PostsCommentsComponent } from './posts-comments/posts-comments.component';
import { QueryCriteriaComponent } from './query-criteria/query-criteria.component';

const routes: Routes = [
    {
        path: '',
        component: HttpClientComponent,
        children: [
            {
                path: '',
                component: DocComponent,
                pathMatch: 'full'
            },
            {
                path: 'doc',
                component: DocComponent
            },
            {
                path: 'query-criteria',
                component: QueryCriteriaComponent
            },
            {
                path: 'posts',
                component: PostsComponent
            },
            {
                path: 'posts-comments',
                component: PostsCommentsComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpClientRoutingModule { }
