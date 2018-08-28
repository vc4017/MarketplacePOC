import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {

  isElement= false;

  constructor() {   }

  ngOnInit() {
  }
  Slides = [
    { id: 1, name: 'slide 1', date: '10/12/2016', SlideType: 'Eliment Asset',EquipmentType:'Vending',EquipmentSubType:'Glass Front Vender'},
    { id: 2, name: 'slide 2', date: '10/12/2016', SlideType: 'Eliment Asset',EquipmentType:'Vending',EquipmentSubType:'Glass Front Vender'},
    { id: 3, name: 'slide 3', date: '10/12/2016', SlideType: 'Eliment Asset',EquipmentType:'Vending',EquipmentSubType:'Glass Front Vender'},
    { id: 4, name: 'slide 4', date: '10/12/2016', SlideType: 'Eliment non Asset',EquipmentType:'Vending',EquipmentSubType:'Glass Front Vender'},
    { id: 5, name: 'slide 5', date: '10/12/2016', SlideType: 'Eliment non Asset',EquipmentType:'Vending',EquipmentSubType:'Glass Front Vender'},
    { id: 6, name: 'slide 6', date: '10/12/2016', SlideType: 'NonEliment',EquipmentType:'Vending',EquipmentSubType:'Glass Front Vender'}
  ];

  presentationOnChange(event) {
    event.toLowerCase() === 'elementasset' ? this.isElement = true: this.isElement = false;
  }
}
