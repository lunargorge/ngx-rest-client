import { Component, OnInit } from '@angular/core';

const cExample1 = `
    export class X {
      public add(): void {
        console.log('jakis test');
      }
    }`;

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {
  codeExample1: string = cExample1;

  constructor() { }

  ngOnInit() {
  }

}
