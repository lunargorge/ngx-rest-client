
import { Injectable } from '@angular/core';
import { Property } from 'handy-data';

@Injectable()
export class PostEntity {
    @Property('id')
    protected _id: number;

    @Property('userId')
    protected _userId: number;

    @Property('title')
    protected _title: string;

    @Property('body')
    protected _body: string;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get userId(): number {
        return this._userId;
    }

    set userId(value: number) {
        this._userId = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get body(): string {
        return this._body;
    }

    set body(value: string) {
        this._body = value;
    }
}
