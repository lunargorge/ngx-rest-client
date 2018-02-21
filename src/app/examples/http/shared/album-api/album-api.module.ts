import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './service/post.service';
import { HttpClientModule } from '@angular/common/http';
import { PostRepository } from './repository/post.repository';
import { PostEntity } from './entity/post.entity';
import { PostCommentService } from './service/post-comment.service';
import { PostCommentRepository } from './repository/post-comment.repository';
import { PostCommentEntity } from './entity/post-comment.entity';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        PostService, PostRepository, PostEntity,
        PostCommentService, PostCommentRepository,
        PostCommentEntity
    ],
    declarations: []
})
export class AlbumApiModule {
}
