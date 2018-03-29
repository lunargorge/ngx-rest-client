
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PostEntity } from './../entity/post.entity';
import { environment } from './../../../../../../environments/environment';

// 'ngx-rest-client'
import { HttpRepository } from '../../../../../../library/http/http.repository';

@Injectable()
export class PostRepository extends HttpRepository<PostEntity> {
    protected resourceUri = 'posts';

    constructor(httpClient: HttpClient, targetEntity: PostEntity) {
        super(httpClient, targetEntity, environment.apis.album);
    }
}
