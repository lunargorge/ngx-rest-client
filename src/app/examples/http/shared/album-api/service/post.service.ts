
import { Injectable } from '@angular/core';

import { HttpService } from '../../../../../../library'; // 'ngx-rest-client'

import { PostRepository } from '../repository/post.repository';
import { PostEntity } from '../entity/post.entity';

@Injectable()
export class PostService extends HttpService<PostRepository, PostEntity> {
    constructor(repository: PostRepository) {
        super(repository);
    }
}
