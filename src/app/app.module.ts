import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormMaterialModule } from './form-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './components/button/button.component';
import { AuthGuard } from './auth/AuthGuard';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
	declarations: [
		AppComponent,
		FormComponent,
		InputComponent,
		DynamicFieldDirective,
		LoginFormComponent,
		ButtonComponent,
		HomeComponent,
		IndexComponent,
		RegisterFormComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormMaterialModule,
		ReactiveFormsModule,
		FormsModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatIconModule,
		MatSidenavModule,
		MatToolbarModule
	],
	providers: [AuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule {}
