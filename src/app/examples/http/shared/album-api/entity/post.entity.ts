
import { Injectable } from '@angular/core';
import { Property } from 'json2entity';

@Injectable()
export class PostEntity {
    @Property('id')
    public id: number;

    @Property('userId')
    public userId: number;

    @Property('title')
    public title: string;

    @Property('body')
    public body: string;
}
