import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../can-deactivate.guard';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements CanComponentDeactivate {
  submitted = false;

  submitForm() {
    this.submitted = true;
    console.log('Form submitted!');
  }

  canDeactivate(): boolean {
    if (!this.submitted) {
      return window.confirm('Do you want to leave without submitting the form?');
    }
    return true;
  }
}
