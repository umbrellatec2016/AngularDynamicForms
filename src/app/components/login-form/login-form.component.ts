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
@Component({
	selector: 'app-login-form',
	/*template: ` <mat-card class="login-card">
		<mat-card-content>
			<mat-tab-group mat-align-tabs="start">
				<mat-tab label="Login"
					><div class="content">
						<mat-form-field class="example-full-width">
							<mat-label>Telephone</mat-label>
							<span matPrefix>+1 &nbsp;</span>
							<input
								type="tel"
								matInput
								placeholder="555-555-1234"
							/>
							<mat-icon matSuffix>mode_edit</mat-icon>
						</mat-form-field>
					</div>
				</mat-tab>
				<mat-tab label="Sign Up"> Content 2 </mat-tab>
			</mat-tab-group>
		</mat-card-content>
	</mat-card>`,*/
	template: `<mat-card class="login-card">
		<h1>login Form</h1>
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
export class LoginFormComponent implements OnInit {
	@ViewChild(FormComponent) form: FormComponent;
	constructor(private apiservice: FormsService, private auth: AuthService) {}
	public regConfig: FormRoot;

	ngOnInit(): void {
		this.apiservice
			.getLoginForm()
			.subscribe((loginCfg) => (this.regConfig = loginCfg));
	}
	submit(value: any) {
		this.auth.authenticateuser(this.form.value);
	}
}
