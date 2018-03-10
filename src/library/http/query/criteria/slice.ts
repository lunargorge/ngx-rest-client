import { IQueryCriteria } from '../query-criteria.interface';
import { QueryCriteriaType } from '../query-criteria-type';

export interface ISliceOption {
    start: number;
    end?: 0;
    limit?: 0;
}

export class QueryCriteriaSlice implements IQueryCriteria {

    constructor(private slice: ISliceOption) {
    }

    public getParameters(): string {
        let slice = '_start=' + this.slice.start;

        if (this.slice.hasOwnProperty('end')) {
            slice += slice + '&end=' + this.slice.end;
        }

        if (this.slice.hasOwnProperty('limit')) {
            slice += slice + '&limit=' + this.slice.limit;
        }

        return slice;
    }

    public getType(): string {
        return QueryCriteriaType.SLICE;
    }

    public getSlice(): ISliceOption {
        return this.slice;
    }
}
