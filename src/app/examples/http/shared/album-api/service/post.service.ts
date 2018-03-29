
import { Injectable } from '@angular/core';

import { PostRepository } from './../repository/post.repository';
import { PostEntity } from './../entity/post.entity';

// 'ngx-rest-client'
import { HttpService } from './../../../../../../library/http/http.service';

@Injectable()
export class PostService extends HttpService<PostRepository, PostEntity> {
    constructor(repository: PostRepository) {
        super(repository);
    }
}
