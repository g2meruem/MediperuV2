import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIkitRoutingModule } from './uikit-routing.module';
import { AppointmentRequestComponent } from './appointment-request/appointment-request.component';
import { FormsModule } from '@angular/forms';
@NgModule({
	imports: [
		CommonModule,
		UIkitRoutingModule,
        FormsModule
	],
	declarations: [
   AppointmentRequestComponent
	]
})
export class UIkitModule { }
