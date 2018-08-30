import { HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ArrayCollection } from 'json2entity';

import { HttpRepository } from './http.repository';
import { IQueryCriteria } from './query/query-criteria.interface';
import { IHttpRequestOptions } from './http-request-options.interface';

export abstract class HttpService<R extends HttpRepository<E>, E> {

    constructor(protected repository: R) {}

    public fetchById(id: number | string, queryCriteria: ArrayCollection<IQueryCriteria> = null, options: IHttpRequestOptions = {}):
            Observable<E | HttpResponse<E> | HttpEvent<E>> {
        return this.repository.fetchById(id, queryCriteria, options);
    }

    public fetch(queryCriteria: ArrayCollection<IQueryCriteria> = null, options: IHttpRequestOptions = {}):
            Observable<ArrayCollection<E> | HttpResponse<ArrayCollection<E>> | HttpEvent<ArrayCollection<E>>> {
        return this.repository.fetch(queryCriteria, options);
    }

    public save(entity: E, options: IHttpRequestOptions = {}):
            Observable<E | HttpResponse<E> | HttpEvent<E>> { // run save / update
        return this.repository.save(entity, options);
    }

    public create(entity: E, options: IHttpRequestOptions = {}):
            Observable<E | HttpResponse<E> | HttpEvent<E>> {
        return this.repository.create(entity, options);
    }

    public update(entity: E, options: IHttpRequestOptions = {}):
            Observable<E | HttpResponse<E> | HttpEvent<E>> {
        return this.repository.update(entity, options);
    }

    public modify(id: string | number, entity, options: IHttpRequestOptions = {}):
            Observable<E | HttpResponse<E> | HttpEvent<E>> {
        return this.repository.modify(id, entity, options);
    }

    public delete(id: number | string, options: IHttpRequestOptions = {}):
            Observable<any | E | HttpResponse<E> | HttpEvent<E>> {
        return this.repository.delete(id, options);
    }

    public exist(id: number | string):
            Observable<any> {
        return this.repository.exist(id);
    }

}
