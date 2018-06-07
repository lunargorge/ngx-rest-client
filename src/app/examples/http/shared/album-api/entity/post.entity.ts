
import { Injectable } from '@angular/core';
import { Serializer } from 'json2entity';

@Injectable()
export class PostEntity {
    @Serializer()
    public id: number;

    @Serializer()
    public userId: number;

    @Serializer()
    public title: string;

    @Serializer()
    public body: string;
}
