import { TestBed, inject } from '@angular/core/testing';

import { PostService } from './post.service';
import { PostRepository } from './../repository/post.repository';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostEntity } from './../entity/post.entity';

describe('PostService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [PostService, PostRepository, PostRepository, PostEntity]
        });
    });

    it('should be created', inject([PostService], (service: PostService) => {
        expect(service).toBeTruthy();
    }));
});
