import { IQueryCriteria } from '../query-criteria.interface';
import { QueryCriteriaType } from '../query-criteria-type';
import { ArrayCollection } from 'json2entity';

export interface IFiltersOption {
    key: string;
    value: string | number;
}

export class QueryCriteriaFilter implements IQueryCriteria {

    constructor(private filters: ArrayCollection<IFiltersOption>) {
    }

    public getParameters(): string {
        let filters = '';

        this.filters.items().forEach(item => {
            if (filters !== '') {
                filters += '&';
            }
            filters += item.key + '=' + item.value;
        });

        return filters;
    }

    public getType(): string {
        return QueryCriteriaType.FILTER;
    }

    public getFilters(): ArrayCollection<IFiltersOption> {
        return this.filters;
    }
}
