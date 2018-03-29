
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PostService } from './service/post.service';
import { PostCommentService } from './service/post-comment.service';
import { PostRepository } from './repository/post.repository';
import { PostCommentRepository } from './repository/post-comment.repository';
import { PostCommentEntity } from './entity/post-comment.entity';
import { PostEntity } from './entity/post.entity';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        PostService, PostRepository, PostEntity,
        PostCommentService, PostCommentRepository, PostCommentEntity
    ],
    declarations: []
})
export class AlbumApiModule {
}
