import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

const filterTs = `
    let criteria = new ArrayCollection<IQueryCriteria>();
    
    let filters = new ArrayCollection<IFiltersOption>(); 
    filters.add({key: 'author', value: 'typicode'});
    filters.add({key: 'author.name', value: 'typicode'});
    criteria.add(new QueryCriteriaFilter(filters);
    
    // other criteria ...
    
    // GET /any-endpoint?author=typicode&author.name=typicode
    this.anyService.fetch(criteria).subscribe((res: ArrayCollection<AnyEntity>) => {
        // ...
    });
`;

const paginateTs = `
    let criteria = new ArrayCollection<IQueryCriteria>();
    criteria.add(new QueryCriteriaPaginate(1, 10));
    
    // other criteria ...
    
    // GET /any-endpoint?_page=1&_limit=10
    this.anyService.fetch(criteria).subscribe((res: ArrayCollection<AnyEntity>) => {
        // ...
    });
`;

const sortTs = `
    let criteria = new ArrayCollection<IQueryCriteria>();
    criteria.add(new QueryCriteriaSort('title', 'asc'));
  
    // other criteria ...
    
    // GET /any-endpoint?_sort=title&_order=asc
    this.anyService.fetch(criteria).subscribe((res: ArrayCollection<AnyEntity>) => {
        // ...
    });
`;

const sliceTs = `
    let criteria = new ArrayCollection<IQueryCriteria>();
    criteria.add(new QueryCriteriaSlice({start: 20, end: 30}));
  
    // other criteria ...
    
    // GET /any-endpoint?_start=20&_end=30
    this.anyService.fetch(criteria).subscribe((res: ArrayCollection<AnyEntity>) => {
        // ...
    });
`;

const operatorsTs = `
    let criteria = new ArrayCollection<IQueryCriteria>();
    
    let operators = new ArrayCollection<IOperatorOption>(); 
    operators.add({key: 'title', operator: 'like', value: 'server'});
    operators.add({key: 'id', operator: 'ne', value: 1});
    criteria.add(new QueryCriteriaOperator(operators);
    
    // other criteria ...
    
    // GET /any-endpoint?title_like=server&id_ne=1
    this.anyService.fetch(criteria).subscribe((res: ArrayCollection<AnyEntity>) => {
        // ...
    });
`;

const fullTextSearchTs = `
    let criteria = new ArrayCollection<IQueryCriteria>();
    criteria.add(new QueryCriteriaFullTextSearch('search-phrase'));
  
    // other criteria ...
    
    // GET /any-endpoint?q=search-phrase
    this.anyService.fetch(criteria).subscribe((res: ArrayCollection<AnyEntity>) => {
        // ...
    });
`;

const relationshipsTs = `
    let criteria = new ArrayCollection<IQueryCriteria>();
    criteria.add(new QueryCriteriaRelationshipEmbed('comments'));
    criteria.add(new QueryCriteriaRelationshipExpand('post'));
  
    // other criteria ...
    
    // GET /any-endpoint?_expand=post&_embed=comments
    this.anyService.fetch(criteria).subscribe((res: ArrayCollection<AnyEntity>) => {
        // ...
    });
`;

@Component({
    selector: 'app-query-criteria',
    templateUrl: './query-criteria.component.html',
    styleUrls: ['./query-criteria.component.css'],
    // silent ERROR !!!
    // providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class QueryCriteriaComponent implements OnInit, AfterViewChecked {
    public filterTs = filterTs;
    public paginateTs = paginateTs;
    public sortTs = sortTs;
    public sliceTs = sliceTs;
    public operatorsTs = operatorsTs;
    public fullTextSearchTs = fullTextSearchTs;
    public relationshipsTs = relationshipsTs;
    private fragment: string;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.fragment.subscribe(fragment => {
            this.fragment = fragment;
        });
    }

    ngAfterViewChecked(): void {
        try {
            document.querySelector('#' + this.fragment).scrollIntoView();
        } catch (e) {
        }
    }
}
