import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ArrayCollection, Entity2ObjectLiteral, ObjectLiteral2Entity } from 'handy-data'; // 'ngx-rest-client'
import { IQueryCriteria } from './query-criteria/query-criteria.interface';
import { IHttpRequestOptions } from './http-request-options.interface';

// https://angular.io/api/common/http/HttpClient
// https://blog.hackages.io/angular-http-httpclient-same-but-different-86a50bbcc450
// https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8

// https://github.com/adnan-kamili/rest-api-response-format
// http://www.restapitutorial.com/lessons/httpmethods.html

export abstract class HttpRepository<E> {
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

    public fetchById(id: number | string, options: IHttpRequestOptions = {}):
            Observable<E | HttpResponse<E> | HttpEvent<E>> {
        const isObserve = (options.hasOwnProperty('observe')) ? true : false;
        return this.httpClient.request('GET', this.getUrl(id), this.prepareOptions(options)).map(res => {
            return (!isObserve)
                ? <E>this.prepareEntity(res)
                : res.clone({body: <E>this.prepareEntity(res.body)});
        });
    }

    public fetch(queryCriteria?: ArrayCollection<IQueryCriteria>, options: IHttpRequestOptions = {}):
            Observable<ArrayCollection<E> | HttpResponse<ArrayCollection<E>> | HttpEvent<ArrayCollection<E>>> {
        const isObserve = (options.hasOwnProperty('observe')) ? true : false;
        return this.httpClient
            .request('GET', this.getUrl(null, queryCriteria), this.prepareOptions(options, queryCriteria))
            .map(res => {
                return (!isObserve)
                    ? <ArrayCollection<E>>this.prepareEntity(res)
                    : res.clone({body: <ArrayCollection<E>>this.prepareEntity(res.body)});
            });
    }

    public save(entity: E, options: IHttpRequestOptions = {}):
            Observable<E | HttpResponse<E> | HttpEvent<E>> {
        return (entity && entity[this.resourceKeyId])
            ? this.update(entity, options) : this.create(entity, options);
    }

    public create(entity: E, options: IHttpRequestOptions = {}):
            Observable<E | HttpResponse<E> | HttpEvent<E>> {
        options['body'] = (new Entity2ObjectLiteral()).process(entity);
        return this.httpClient.request('POST', this.getUrl(), options).map(res => {
            return <E>this.prepareEntity(res);
        });
    }

    public update(entity: E, options: IHttpRequestOptions = {}):
            Observable<E | HttpResponse<E> | HttpEvent<E>> {
        options['body'] = (new Entity2ObjectLiteral()).process(entity);
        return this.httpClient.request('PUT', this.getUrl(entity[this.resourceKeyId]), options).map(res => {
            return <E>this.prepareEntity(res);
        });
    }

    public modify(id: string | number, data: any, options: IHttpRequestOptions = {}):
            Observable<E | HttpResponse<E> | HttpEvent<E>> {
        options['body'] = data;
        return this.httpClient.request('PATCH', this.getUrl(id), options).map(res => {
            return <E>this.prepareEntity(res);
        });
    }

    public delete(id: number | string, options: IHttpRequestOptions = {}):
            Observable<any | E | HttpResponse<E> | HttpEvent<E>> {
        return this.httpClient.request('DELETE', this.getUrl(id), options);
    }

    public exist(id: number | string = null, options: IHttpRequestOptions = {}):
            Observable<any> { // ?????
        return this.httpClient.request('HEAD', this.getUrl(id), options);
    }

    public updateNestedResourceUri(uri: string): void {
        this.resourceNestedUri = uri;
    }

    public getResourceUri(): string {
        return this.resourceUri;
    }

    protected prepareEntity(jsonData: any): any {
        return (new ObjectLiteral2Entity()).process(jsonData, this.targetEntity);
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
