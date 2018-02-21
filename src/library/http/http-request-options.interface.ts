import { HttpObserve } from '@angular/common/http/src/client';
import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface IHttpRequestOptions {
    body?: any;
    headers?: HttpHeaders;
    observe?: HttpObserve;
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    withCredentials?: boolean;
}
