import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output
} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FieldConfig, Validator } from '../../field.interface';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
	@Input() fields: FieldConfig[] = [];

	@Output() submit: EventEmitter<any> = new EventEmitter<any>();
	form: FormGroup;

	get value() {
		return this.form.value;
	}

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.form = this.createControl();
	}
	createControl() {
		const group = this.fb.group({});
		this.fields.forEach((field) => {
			if (field.type === 'button') return;
			const control = this.fb.control(
				field.value,
				this.bindValidations(field.validations || [])
			);
			group.addControl(field.name, control);
		});
		return group;
	}
	bindValidations(validations: any) {
		if (validations.length > 0) {
			const validList: Validator[] = [];
			validations.forEach((valid: Validator) => {
				let validator: any;

				if (valid.name === 'required') {
					validator = Validators.required;
				}
				if (valid.name === 'pattern') {
					validator = Validators.pattern(valid.validator);
				}
				if (valid.name === 'email') {
					validator = Validators.email(valid.validator);
				}

				validList.push(validator);
			});
			if (validList != null) {
				return Validators.compose(<any>validList);
			}
		}
		return null;
	}
	validateAllFormFields(formGroup: FormGroup) {
		Object.keys(formGroup.controls).forEach((field) => {
			const control = formGroup.get(field);
			control != null ? control.markAsTouched({ onlySelf: true }) : null;
		});
	}
	onSubmit(event: Event) {
		event.preventDefault();
		event.stopPropagation();
		if (this.form.valid) {
			this.submit.emit(this.form.value);
		} else {
			this.validateAllFormFields(this.form);
		}
	}
}
