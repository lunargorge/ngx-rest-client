import { Property } from 'handy-data';

export class PostCommentEntity {
    @Property('id')
    protected _id: number;

    @Property('postId')
    protected _postId: number;

    @Property('name')
    protected _name: string;

    @Property('email')
    protected _email: string;

    @Property('body')
    protected _body: string;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get postId(): number {
        return this._postId;
    }

    set postId(value: number) {
        this._postId = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get body(): string {
        return this._body;
    }

    set body(value: string) {
        this._body = value;
    }
}
