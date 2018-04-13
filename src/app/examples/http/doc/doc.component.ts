import { Component, OnInit } from '@angular/core';

const installTs = `
$ npm install json2entity --save
$ npm install ngx-rest-client --save
`;

const usageTs = `
    @Injectable()
    export class PostRepository extends HttpRepository<PostEntity> {
        protected resourceUri = 'posts';

        constructor(httpClient: HttpClient, targetEntity: PostEntity) {
            super(httpClient, targetEntity, environment.apis.album);
        }
    }

    @Injectable()
    export class PostService extends HttpService<PostRepository, PostEntity> {
        constructor(repository: PostRepository) {
            super(repository);
        }
    }

    export class AnyComponent implements OnInit {
        public posts: ArrayCollection<PostEntity> = new ArrayCollection<any>();

        constructor(private postService: PostService) {
        }

        ngOnInit() {
            this.postService.fetch().subscribe((res: ArrayCollection<PostEntity>) => {
                this.posts = res;// do something ...
            });

            // if you need access to headers e.g. X-Total-Count, use the option: {observe: 'response'}
            let criteria = new ArrayCollection<IQueryCriteria>();
            criteria.add(new QueryCriteriaSlice({start: 20, end: 30}));
            this.postService.fetch(criteria, {observe: 'response'}).subscribe((res: HttpResponse<ArrayCollection<PostEntity>>) => {
              // res.headers.get('X-Total-Count'); // do something ..
              this.posts = res.body;
          });
        }
    }
`;

const demoRunBash = `
 // open terminal tab
 $ npm install -g json-server

 $ git clone https://github.com/lunargorge/ngx-rest-client.git
 $ cd ngx-rest-client
 $ npm install
 $ json-server --watch json-server/db.json

 // open next terminal tab
 $ cd ngx-rest-client
 $ npm run start

 // go to http://localhost:4200
 // all operations (GET, POST, PUT, PATCH, DELETE) will work
`;

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {
  public demoRunBash = demoRunBash;
  public usageTs = usageTs;
  public installTs = installTs;
  constructor() { }

  ngOnInit() {
  }

}
