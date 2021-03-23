import {
	ComponentFactoryResolver,
	ComponentRef,
	Directive,
	Input,
	OnInit,
	ViewContainerRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { FieldConfig } from '../../field.interface';

import { ButtonComponent } from '../button/button.component';
const componentMapper: any = {
	input: InputComponent,
	button: ButtonComponent
	// select: SelectComponent,
	// date: DateComponent,
	// radiobutton: RadiobuttonComponent,
	// checkbox: CheckboxComponent
};
@Directive({
	selector: '[appDynamicField]'
})
export class DynamicFieldDirective {
	@Input() field: FieldConfig;
	@Input() group: FormGroup;
	componentRef: any;
	constructor(
		private resolver: ComponentFactoryResolver,
		private container: ViewContainerRef
	) {}
	ngOnInit() {
		const factory = this.resolver.resolveComponentFactory(
			componentMapper[this.field.type]
		);
		this.componentRef = this.container.createComponent(factory);
		this.componentRef.instance.field = this.field;
		this.componentRef.instance.group = this.group;
	}
}
