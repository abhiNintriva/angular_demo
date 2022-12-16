import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../auth/login/login.component';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService , private route: Router) { }
  canActivate() {

    if (this.auth.isLogedIn()) {
      return true

    }
    console.log("FALSE");
    this.route.navigateByUrl('register');
    return false

  }

}
