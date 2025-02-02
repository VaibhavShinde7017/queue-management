import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  canActivate(): boolean {
    const token = localStorage.getItem('userToken');

    if (token) {
      return true; // Allow access if token exists
    } else {
      this.router.navigate(['/login']); // Redirect to login if no token
      return false;
    }

    // if (token) {
    //   this.router.navigate(['/dashboard']);  // Redirect to login if no token
    //   return false;  // Allow access
    // } else {
    //   sessionStorage.clear();
    //   return true;
    // }
  }
  
}
