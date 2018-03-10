import { IQueryCriteria } from '../query-criteria.interface';
import { QueryCriteriaType } from '../query-criteria-type';

export class QueryCriteriaPaginate implements IQueryCriteria {

    constructor(private page: number = 0, private limit: number = 10) {
    }

    public getParameters(): string {
        return '_page=' + this.page + '&_limit=' + this.limit;
    }

    public getType(): string {
        return QueryCriteriaType.PAGINATION;
    }

    public getPage(): number {
        return this.page;
    }

    public getLimit(): number {
        return this.limit;
    }
}
