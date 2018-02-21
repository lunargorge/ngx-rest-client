import { IQueryCriteria } from '../query-criteria.interface';
import { QueryCriteriaType } from '../query-criteria-type';

export class QueryCriteriaFullTextSearch implements IQueryCriteria {

    constructor(private search: string) {
    }

    public getParameters(): string {
        return 'q=' + this.search;
    }

    public getType(): string {
        return QueryCriteriaType.FULL_TEXT_SEARCH;
    }

    public getSearch(): string {
        return this.search;
    }
}
