import {
	ActivatedRouteSnapshot,
	CanActivate,
	CanActivateChild,
	Router,
	RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthGuard implements CanActivate {
	path: ActivatedRouteSnapshot[];
	route: ActivatedRouteSnapshot;
	constructor(private authService: AuthService, private router: Router) {}

	public canActivate(): boolean {
		const token = localStorage.getItem('token');
		// Check whether the token is expired and return
		// true or false
		if (!this.authService.loginState()) {
			this.router.navigate(['/nologin']);
			return false;
		}
		console.log('true');
		return true;
	}
}
