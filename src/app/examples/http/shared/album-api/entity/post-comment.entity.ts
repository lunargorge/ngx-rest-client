
import { Injectable } from '@angular/core';
import { Property } from 'json2entity';

@Injectable()
export class PostCommentEntity {
    @Property('id')
    public id: number;

    @Property('postId')
    public postId: number;

    @Property('name')
    public name: string;

    @Property('email')
    public email: string;

    @Property('body')
    protected _body: string;

    get body(): string {
        return this._body;
    }

    set body(value: string) {
        this._body = value;
    }
}
