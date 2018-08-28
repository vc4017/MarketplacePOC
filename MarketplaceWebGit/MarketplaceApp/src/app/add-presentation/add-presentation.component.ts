import { Component, OnInit } from '@angular/core';
import { PresentationType } from './PresentationType';
import { debug } from 'util';

@Component({
  selector: 'app-add-presentation',
  templateUrl: './add-presentation.component.html',
  styleUrls: ['./add-presentation.component.css']
})
export class AddPresentationComponent implements OnInit {
  presentationType: string;
  selectedOption: PresentationType = new PresentationType(2, 'Commercial Plan');
  Presentation = [
    new PresentationType(1, 'Welcome'),
    new PresentationType(2, 'Commercial Plan'),
    new PresentationType(3, 'Resource'),
  ];

  constructor() {
  }

  ngOnInit() {

  }
  getValue(optionid) {
    this.selectedOption = this.Presentation.filter((item) => item.id == optionid)[0];
  }
  ViewPresentationType() {
    this.presentationType = this.selectedOption.name;
  }
}
