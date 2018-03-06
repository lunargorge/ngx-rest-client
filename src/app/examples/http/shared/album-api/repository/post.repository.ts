
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpRepository } from '../../../../../../library'; // 'ngx-rest-client'

import { PostEntity } from '../entity/post.entity';
import { environment } from '../../../../../../environments/environment';

@Injectable()
export class PostRepository extends HttpRepository<PostEntity> {
    protected resourceUri = 'posts';

    constructor(httpClient: HttpClient, targetEntity: PostEntity) {
        super(httpClient, targetEntity, environment.apis.album);
    }
}
