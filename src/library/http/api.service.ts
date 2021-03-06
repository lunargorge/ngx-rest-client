import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ArrayCollection, Entity2Json, Json2Entity } from 'json2entity';
import { IQueryCriteria } from './query/query-criteria.interface';
import { IHttpRequestOptions } from './http-request-options.interface';

// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html
export type TPartialEntity<T> = {
    [P in keyof T]?: T[P];
};

export abstract class ApiService<E> {
    protected resourceUri: string;
    protected resourceNestedUri: string;
    protected resourceKeyId = 'id';
    private urlApi: string;
    private targetEntity: E;
    private httpClient: HttpClient;

    public constructor(http: HttpClient, targetEntity: E, urlApi: string) {
        this.targetEntity = targetEntity;
        this.httpClient = http;
        this.urlApi = urlApi;
    }

    public fetchById(id: number | string, queryCriteria: ArrayCollection<IQueryCriteria> = null, options: IHttpRequestOptions = {}):
            Observable<E | HttpResponse<E> | HttpEvent<E>> {
        const isObserve = (options.hasOwnProperty('observe')) ? true : false;
        return this.httpClient.request('GET', this.getUrl(id, queryCriteria), this.prepareOptions(options))
            .pipe(map(res => {
                return (!isObserve)
                    ? <E>this.prepareEntity(res)
                    : res.clone({body: <E>this.prepareEntity(res.body)});
            }));
    }

    public fetch(queryCriteria: ArrayCollection<IQueryCriteria> = null, options: IHttpRequestOptions = {}):
            Observable<ArrayCollection<E> | HttpResponse<ArrayCollection<E>> | HttpEvent<ArrayCollection<E>>> {
        const isObserve = (options.hasOwnProperty('observe')) ? true : false;
        return this.httpClient
            .request('GET', this.getUrl(null, queryCriteria), this.prepareOptions(options, queryCriteria))
            .pipe(map(res => {
                return (!isObserve)
                    ? <ArrayCollection<E>>this.prepareEntity(res)
                    : res.clone({body: <ArrayCollection<E>>this.prepareEntity(res.body)});
            }));
    }

    public save(entity: E, options: IHttpRequestOptions = {}):
            Observable<E | HttpResponse<E> | HttpEvent<E>> {
        return (entity && entity[this.resourceKeyId])
            ? this.update(entity, options) : this.create(entity, options);
    }

    public create(entity: E, options: IHttpRequestOptions = {}):
            Observable<E | HttpResponse<E> | HttpEvent<E>> {
        options['body'] = (new Entity2Json()).process(entity);
        return this.httpClient.request('POST', this.getUrl(), options)
            .pipe(map(res => {
                return <E>this.prepareEntity(res);
            }));
    }

    public update(entity: E, options: IHttpRequestOptions = {}):
            Observable<E | HttpResponse<E> | HttpEvent<E>> {
        options['body'] = (new Entity2Json()).process(entity);
        return this.httpClient.request('PUT', this.getUrl(entity[this.resourceKeyId]), options)
            .pipe(map(res => {
                return <E>this.prepareEntity(res);
            }));
    }

    public modify(id: string | number, data: TPartialEntity<E>, options: IHttpRequestOptions = {}):
            Observable<E | HttpResponse<E> | HttpEvent<E>> {
        options['body'] = data;
        return this.httpClient.request('PATCH', this.getUrl(id), options)
            .pipe(map(res => {
                return <E>this.prepareEntity(res);
            }));
    }

    public delete(id: number | string, options: IHttpRequestOptions = {}):
            Observable<any | E | HttpResponse<E> | HttpEvent<E>> {
        return this.httpClient.request('DELETE', this.getUrl(id), options);
    }

    public exist(id: number | string = null, options: IHttpRequestOptions = {}):
            Observable<any> {
        return this.httpClient.request('HEAD', this.getUrl(id), options);
    }

    public updateNestedResourceUri(uri: string): void {
        this.resourceNestedUri = uri;
    }

    public getResourceUri(): string {
        return this.resourceUri;
    }

    protected prepareEntity(jsonData: any): any {
        return (new Json2Entity()).process(jsonData, this.targetEntity);
    }

    protected getUrl(id: string | number = null, queryCriteria?: ArrayCollection<IQueryCriteria>): string {
        let params = '';

        if (queryCriteria) {
            params = this.getQueryParameters(queryCriteria);
        }

        const uri = this.resourceNestedUri ? this.resourceNestedUri : this.resourceUri;
        const url = this.urlApi + '/' + uri + params;

        return (id) ? url + '/' + id : url;
    }

    protected getQueryParameters(queryCriteria?: ArrayCollection<IQueryCriteria>): string {
        let params = '';

        if (queryCriteria) {
            for (const criteria of queryCriteria.items()) {
                // console.log(criteria.getType());
                params += criteria.getParameters() + '&';
            }
        }

        return '?' + params.slice(0, -1);
    }

    protected prepareOptions(options?: IHttpRequestOptions, queryCriteria?: ArrayCollection<IQueryCriteria>):
            IHttpRequestOptions {
        const headers = (options && options.hasOwnProperty('headers')) ? options.headers : new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        // do something with queryCriteria ...

        // let headers = {};
        // for (const criteria of queryCriteria.items()) {
        //     if (criteria.getType() === QueryCriteriaType.FILTER) {
        //         const criteriaItem = <QueryCriteriaFilter>criteria;
        //         const filters: ArrayCollection<IFiltersOption> = criteriaItem.getFilters();
        //         const filter: IFiltersOption = filters.first();
        //         headers['myFilter'] = {key: filter.key, val: filter.value};
        //     }
        // }

        options.headers = headers;

        return options;
    }
}
