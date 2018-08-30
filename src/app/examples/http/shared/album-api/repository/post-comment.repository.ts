
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PostCommentEntity } from './../entity/post-comment.entity';
import { environment } from './../../../../../../environments/environment';

// 'ngx-rest-client'
import { HttpRepository } from '../../../../../../library/http/http.repository';

@Injectable()
export class PostCommentRepository extends HttpRepository<PostCommentEntity> {
    protected resourceUri = 'posts/{POST_ID}/comments';

    constructor(httpClient: HttpClient, targetEntity: PostCommentEntity) {
        super(httpClient, targetEntity, environment.apis.album);
    }

    public setUriParams(postId: string | number) {
        postId = postId + '';
        const uri = this.getResourceUri().replace(/{POST_ID}/, postId);
        this.updateNestedResourceUri(uri);
    }
}
