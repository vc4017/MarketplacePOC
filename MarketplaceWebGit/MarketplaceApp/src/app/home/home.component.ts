import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    name:String="";
    constructor(private _authService:AuthService) { }
    displayedColumns: string[] = ['image','position', 'name', 'weight', 'symbol','Type','Edit','Delete','Duplicate'];
    
    ngOnInit() {
        //  this._authService.getName();
    }
 
    public signout():void {
       this._authService.signout();
    }
 }

