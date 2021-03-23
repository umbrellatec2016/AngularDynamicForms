import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from 'src/app/profile.interface';
@Injectable({
	providedIn: 'root'
})
export class ApiService {
	constructor(private http: HttpClient) {}
	public getProfile(profile: string): Observable<Profile> {
		return this.http.get<Profile>(environment.apiURL + '/' + profile);
	}
}
