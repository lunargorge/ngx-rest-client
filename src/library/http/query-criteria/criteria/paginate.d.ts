import { IQueryCriteria } from '../query-criteria.interface';
export declare class QCPaginate implements IQueryCriteria {
    private _page;
    private _limit;
    constructor(page?: number, limit?: number);
    getParameters(): string;
}
