import { TestBed, inject } from '@angular/core/testing';

import { PostService } from './post.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostEntity } from './../entity/post.entity';

describe('PostService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [PostService, PostEntity]
        });
    });

    it('should be created', inject([PostService], (service: PostService) => {
        expect(service).toBeTruthy();
    }));
});
