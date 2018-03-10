
import { Injectable } from '@angular/core';

import { HttpService } from '../../../../../../library'; // 'ngx-rest-client'

import { PostCommentRepository } from '../repository/post-comment.repository';
import { PostCommentEntity } from '../entity/post-comment.entity';
import { HttpEvent, HttpResponse } from '@angular/common/http';
import { ArrayCollection } from 'handy-data';
import { IQueryCriteria } from '../../../../../../library/http/query/query-criteria.interface';
import { IHttpRequestOptions } from '../../../../../../library/http/http-request-options.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostCommentService extends HttpService<PostCommentRepository, PostCommentEntity> {
    constructor(repository: PostCommentRepository) {
        super(repository);
    }

    public setParentResourceParams(postId: string | number) {
        postId = postId + '';
        const uri = this.repository.getResourceUri().replace(/{POST_ID}/, postId);
        this.repository.updateNestedResourceUri(uri);

        return this;
    }

    public fetchById(id: number | string, queryCriteria: ArrayCollection<IQueryCriteria> = null, options: IHttpRequestOptions = {}):
    Observable<PostCommentEntity | HttpResponse<PostCommentEntity> | HttpEvent<PostCommentEntity>> {
        throw Error('To get by ID nested resources (by default one level, add custom routes for more)');
    }

    public save(entity: PostCommentEntity, options: IHttpRequestOptions = {}):
    Observable<PostCommentEntity | HttpResponse<PostCommentEntity> | HttpEvent<PostCommentEntity>> {
        throw Error('To create nested resources (by default one level, add custom routes for more)');
    }

    public create(entity: PostCommentEntity, options: IHttpRequestOptions = {}):
    Observable<PostCommentEntity | HttpResponse<PostCommentEntity> | HttpEvent<PostCommentEntity>> {
        throw Error('To create nested resources (by default one level, add custom routes for more)');
    }

    public update(entity: PostCommentEntity, options: IHttpRequestOptions = {}):
    Observable<PostCommentEntity | HttpResponse<PostCommentEntity> | HttpEvent<PostCommentEntity>> {
        throw Error('To update nested resources (by default one level, add custom routes for more)');
    }

    public modify(id: string | number, entity, options: IHttpRequestOptions = {}):
    Observable<PostCommentEntity | HttpResponse<PostCommentEntity> | HttpEvent<PostCommentEntity>> {
        throw Error('To modify nested resources (by default one level, add custom routes for more)');
    }

    public delete(id: number | string, options: IHttpRequestOptions = {}):
    Observable<any | PostCommentEntity | HttpResponse<PostCommentEntity> | HttpEvent<PostCommentEntity>> {
        throw Error('To delete nested resources (by default one level, add custom routes for more)');
    }

    public exist(id: number | string):
    Observable<any> {
        throw Error('To get or create nested resources (by default one level, add custom routes for more)');
    }
}
