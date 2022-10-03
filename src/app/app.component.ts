import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //@ViewChild('registryForm') form!: NgForm;

  onSubmit(registryForm: NgForm) {
    console.log("NgForm obj in template: ", registryForm.value);

  }
}
