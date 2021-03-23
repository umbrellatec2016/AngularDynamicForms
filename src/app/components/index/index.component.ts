import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
@Component({
	selector: 'app-index',
	template: `
		<mat-toolbar color="primary" class="example-toolbar">
			<h1 class="example-app-name">Hola Visitante Identificate</h1>
		</mat-toolbar>
		<div class="content">
			<mat-card class="centered"
				>Selecciona tu perfil <br /><a
					[routerLink]="['register', 'guest']"
				>
					<mat-icon aria-hidden="false" aria-label="home"
						>person_pin</mat-icon
					></a
				>
				<a [routerLink]="['register', 'agency']">
					<mat-icon aria-hidden="false" aria-label="agency"
						>card_travel</mat-icon
					></a
				>
				<a [routerLink]="['/register', 'company']">
					<mat-icon aria-hidden="false" aria-label="company"
						>business</mat-icon
					></a
				>
			</mat-card>
		</div>
	`,
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
	isExpanded: boolean = false;

	profile: any;
	guest: string;

	constructor() {}

	ngOnInit(): void {}
}
