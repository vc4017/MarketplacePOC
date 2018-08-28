import { AuthService } from '../auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  userName: String;
  constructor(private _authService: AuthService) { }
  displayedColumns: string[] = ['image', 'position', 'name', 'weight', 'symbol', 'Type', 'Edit', 'Delete', 'Duplicate'];

  ngOnInit() {
    // if (this._authService.getName() !== null || this._authService.getName() !== undefined) {
    //   this.userName = this._authService.getName();
    // } else {
    //   this.userName = 'Guest User';
    // }
    this.userName = 'Guest User';

    // this.userName = 'Guest User';
  }

  public signout(): void {
    this._authService.signout();
  }
}
