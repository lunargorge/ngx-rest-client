import { Component, OnInit } from '@angular/core';

let demoRunBash = `
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
 // all operations (POST, PUT, PATCH, DELETE) will work
`;

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {
  public demoRunBash = demoRunBash;
  constructor() { }

  ngOnInit() {
  }

}
