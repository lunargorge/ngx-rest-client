
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpRepository } from '../../../../../../library'; // 'ngx-rest-client'

import { PostCommentEntity } from '../entity/post-comment.entity';
import { environment } from '../../../../../../environments/environment';

@Injectable()
export class PostCommentRepository extends HttpRepository<PostCommentEntity> {
    protected resourceUri = 'posts/{POST_ID}/comments';

    constructor(httpClient: HttpClient, targetEntity: PostCommentEntity) {
        super(httpClient, targetEntity, environment.apis.album);
    }
}
