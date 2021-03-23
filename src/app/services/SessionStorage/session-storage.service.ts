import { Injectable } from '@angular/core';
import { TokenModel } from 'src/app/token.interface';

@Injectable({
	providedIn: 'root'
})
export class SessionStorageService {
	constructor() {}
	public set(key: string, value: string) {
		sessionStorage.setItem(key, value);
	}
	get(key: string): string {
		let val: string | null = sessionStorage.getItem(key);
		if (val === 'null') {
			return '';
		}
		return <string>val;
	}
	clear(key: string) {
		sessionStorage.removeItem(key);
	}
}
