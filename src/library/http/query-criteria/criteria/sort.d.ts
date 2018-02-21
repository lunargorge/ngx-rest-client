import { IQueryCriteria } from '../query-criteria.interface';
export declare class QCSort implements IQueryCriteria {
    private _sort;
    private _order;
    constructor(sort?: string, order?: string);
    getParameters(): string;
}
