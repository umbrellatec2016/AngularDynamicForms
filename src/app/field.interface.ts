import { Validators } from '@angular/forms';
import { InputComponent } from './components/input/input.component';

export interface Validator extends Validators {
	name: string;
	validator: any;
	message: string;
}
export interface FieldConfig {
	label: string;
	name: string;
	inputType: string;
	options?: string[];
	collections?: any;
	type: string;
	value?: any;
	validations?: Validator[];
}
export interface FormRoot {
	elements: FieldConfig[];
	action: string;
}
