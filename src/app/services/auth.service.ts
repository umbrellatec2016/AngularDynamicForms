import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { promise } from 'selenium-webdriver';
import { TokenModel } from '../token.interface';
import { SessionStorageService } from './SessionStorage/session-storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	Token: TokenModel;
	constructor(
		private sessionStorage: SessionStorageService,
		private route: Router,
		private http: HttpClient
	) {}

	/**
	 *
	 * @param user
	 * @param password
	 * @returns token
	 */
	authenticateuser(payload: any): Promise<any> {
		return new Promise((resolve, reject) => {
			//TODO  serialize payload

			let token: Observable<TokenModel> = this.http.get<TokenModel>(
				environment.apiURL + '/login/' + payload.name
			);
			token.subscribe((tk) => {
				this.Token = tk;
				this.setToken(this.Token);
				this.route.navigate(['']);
			});
			//let token = this.Token;
			console.log(this.Token);
		});
	}
	registerUserProfile(payload: any, type: string): Promise<any> {
		return new Promise((resolve, reject) => {
			//TODO  serialize payload

			let token: Observable<TokenModel> = this.http.get<TokenModel>(
				environment.apiURL + '/login/' + type
			);
			token.subscribe((tk) => {
				this.Token = tk;
				this.setToken(this.Token);
				this.route.navigate(['home']);
			});
			//let token = this.Token;
			console.log(this.Token);
		});
	}
	setToken(atkn: TokenModel) {
		this.sessionStorage.set('session', JSON.stringify(this.Token));
	}
	getToken(): Token {
		return JSON.parse(this.sessionStorage.get('session'));
	}
	loginState(): boolean {
		let tKey = this.sessionStorage.get('session');
		console.log(tKey);
		if (tKey !== '' && tKey !== null) {
			return true;
		}
		return false;
	}
}
