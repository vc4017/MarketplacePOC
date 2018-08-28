import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.css']
})
export class PresentationsComponent implements OnInit {
  pageName: string;


  constructor() {

  }

  ngOnInit() {
    this.pageName = 'New Presentation'
  }

  Presentations = [
    { id: 1, name: 'Presentation 1', date: '10/12/2016', presentationType: 'welcome'},
    { id: 2, name: 'Presentation 2', date: '10/12/2016', presentationType: 'Commercial Type'},
    { id: 3, name: 'Presentation 3', date: '10/12/2016', presentationType: 'Resource'},
    { id: 4, name: 'Presentation 3', date: '10/12/2016', presentationType: 'welcome'},
    { id: 5, name: 'Presentation 3', date: '10/12/2016', presentationType: 'Commercial Type'},
    { id: 6, name: 'Presentation 3', date: '10/12/2016', presentationType: 'Resource'}
  ];
}


