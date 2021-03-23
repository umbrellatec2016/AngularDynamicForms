import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatListModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSelectModule,
		MatOptionModule,
		MatCheckboxModule,
		MatRadioModule,
		MatTabsModule
	],
	exports: [
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatListModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSelectModule,
		MatOptionModule,
		MatCheckboxModule,
		MatRadioModule,
		MatTabsModule
	]
})
export class FormMaterialModule {}
