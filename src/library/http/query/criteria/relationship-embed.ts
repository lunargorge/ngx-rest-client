import { IQueryCriteria } from '../query-criteria.interface';
import { QueryCriteriaType } from '../query-criteria-type';

// To include children resources
export class QueryCriteriaRelationshipEmbed implements IQueryCriteria {

    constructor(private embed: string) {
    }

    public getParameters(): string {
        return '_embed=' + this.embed;
    }

    public getType(): string {
        return QueryCriteriaType.RELATIONSHIP_EMBED;
    }

    public getEmbed(): string {
        return this.embed;
    }
}
