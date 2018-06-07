
import { Injectable } from '@angular/core';
import { Serializer } from 'json2entity';

@Injectable()
export class PostCommentEntity {
    @Serializer()
    public id: number;

    @Serializer()
    public postId: number;

    @Serializer()
    public name: string;

    @Serializer()
    public email: string;

    @Serializer()
    protected _body: string;

    get body(): string {
        return this._body;
    }

    set body(value: string) {
        this._body = value;
    }
}
