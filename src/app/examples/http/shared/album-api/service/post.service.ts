
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PostEntity } from './../entity/post.entity';
import { environment } from './../../../../../../environments/environment';

// 'ngx-rest-client'
import { ApiService } from '../../../../../../library/http/api.service';

@Injectable()
export class PostService extends ApiService<PostEntity> {
    protected resourceUri = 'posts';

    constructor(httpClient: HttpClient, targetEntity: PostEntity) {
        super(httpClient, targetEntity, environment.apis.album);
    }
}
