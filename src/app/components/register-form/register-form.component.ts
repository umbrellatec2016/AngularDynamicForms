import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule, MatCardContent } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormComponent } from '../form/form.component';
import { Validators } from '@angular/forms';
import { FieldConfig, FormRoot } from '../../field.interface';
import { FormsService } from '../../services/forms.service';
import { from } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
@Component({
	selector: 'register-form',
	template: `<mat-card class="login-card">
		<h1>{{ param }} Form</h1>
		<mat-card-content>
			<app-form
				*ngIf="regConfig"
				[fields]="regConfig.elements"
				(submit)="submit($event)"
			></app-form>
		</mat-card-content>
	</mat-card>`,
	styles: []
})
export class RegisterFormComponent implements OnInit {
	@ViewChild(FormComponent) form: FormComponent;
	param: any;
	constructor(
		private apiservice: FormsService,
		private auth: AuthService,
		private activatedRoute: ActivatedRoute
	) {}
	public regConfig: FormRoot;

	ngOnInit(): void {
		let type = '';
		this.activatedRoute.params.subscribe((data) => {
			console.log(data);

			this.param = data.type;
		});

		this.apiservice
			.getRegisterForm(this.param)
			.subscribe((loginCfg) => (this.regConfig = loginCfg));
	}
	submit(value: any) {
		this.auth.registerUserProfile(this.form.value, this.param);
	}
}
