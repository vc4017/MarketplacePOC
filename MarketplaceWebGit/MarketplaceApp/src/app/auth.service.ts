import { Injectable } from '@angular/core';
import { Adal5HTTPService, Adal5Service } from 'adal-angular5';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {

private _user=null;
private _config = 
{
   tenant:'CCOPSample.onmicrosoft.com',
   clientId:'b80e1461-f039-4509-9bed-7078151db06a',
   redirectUri:"https://marketplacedev.azurewebsites.net/auth-callback",
   postLogoutRedirectUri: "https://marketplacedev.azurewebsites.net" 
}

constructor(private _adal:Adal5Service) {
   this._adal.init(this._config);
}

public isLoggedIn():boolean
 {
   return this._adal.userInfo.authenticated;
}

public signout():void {
   this._adal.logOut();
}

public startAuthentication():any {
   this._adal.login();
}

public getName(): string {
   return this._user.profile.name;
}

public completeAuthentication():void {
   this._adal.handleWindowCallback();
   this._adal.getUser().subscribe(user=> {
   this._user=user;
   console.log(this._adal.userInfo);
   var expireIn = user.profile.exp.newDate().getTime();
});

}

}


