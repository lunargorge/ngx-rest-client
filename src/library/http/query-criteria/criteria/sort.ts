import { IQueryCriteria } from '../query-criteria.interface';
import { QueryCriteriaType } from '../query-criteria-type';

export type SortOrderType = 'asc' | 'desc';

export class QueryCriteriaSort implements IQueryCriteria {

    constructor(private sort: string, private order: SortOrderType = 'asc') {
    }

    public getParameters(): string {
        return '_sort=' + this.sort + '&_order=' + this.order;
    }

    public getType(): string {
        return QueryCriteriaType.SORT;
    }

    public getSort(): string {
        return this.sort;
    }

    public getOrder(): SortOrderType {
        return this.order;
    }
}
