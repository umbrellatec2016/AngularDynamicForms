import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FieldConfig, FormRoot } from 'src/app/field.interface';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class FormsService {
	private url: string = environment.apiURL;
	constructor(private http: HttpClient) {}
	public getLoginForm(): Observable<FormRoot> {
		return this.http.get<FormRoot>(this.url + '/loginform');
	}
	public getRegisterForm(location: string): Observable<FormRoot> {
		console.log(this.url + location + 'Form/' + location);
		return this.http.get<FormRoot>(this.url + '/' + location + 'Form/');
	}
}
