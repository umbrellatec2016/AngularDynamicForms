import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/profile.interface';
import { ApiService } from 'src/app/services/ApiService/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenModel } from 'src/app/token.interface';

@Component({
	selector: 'app-home',
	template: `
		<mat-card
			><p>
				Bienvenido Profile type <b>{{ token.profile }}</b>
			</p></mat-card
		>
		<mat-tab-group mat-align-tabs="start">
			<mat-tab label="{{ token.id }}"
				><h1>{{ profile.name }}</h1>
				Registered Email: {{ profile.email }}<br />
				<h2>Earnings</h2>
				<mat-icon>check_circle</mat-icon>

				{{ profile.adversiting.primary }}
				<h3>Adversiting</h3>
				<mat-list>
					<mat-list-item *ngFor="let ad of profile.adversiting.ads">
						<mat-icon>thumb_up</mat-icon> {{ ad.data }}
					</mat-list-item>
				</mat-list></mat-tab
			>
		</mat-tab-group>
	`,
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	token: any;
	profile: Profile;
	constructor(private Auth: AuthService, private api: ApiService) {}

	ngOnInit(): void {
		this.token = this.Auth.getToken();
		this.api
			.getProfile(this.token.id)
			.subscribe((data) => (this.profile = data));
	}
}
