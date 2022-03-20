import { Component } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validator,
  Validators,
  MaxLengthValidator,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'form';

  form1 = 'Template Driven Form';

  form2 = 'Reactive Form';

  Getfromdata(data: any) {
    console.log(data);
  }
  // reactive Form
  registerV2 = new FormGroup({
    name: new FormControl('', Validators.minLength(3)),
    email: new FormControl(
      '',
      Validators.pattern('[a-z0-9]+@[a-z]+.[a-z]{2,3}')
    ),
    // pswd: new FormControl('', Validators.required),
    number: new FormControl(
      '',
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
    ),
  });

  GetfromdataV2() {
    console.log(this.registerV2.value);
  }

  get vname() {
    return this.registerV2.get('name');
  }

  get vemail() {
    return this.registerV2.get('email');
  }

  // get vpswd() {
  //   return this.registerV2.get('pswd');
  // }

  get vnumber() {
    return this.registerV2.get('number');
  }

  reactiveForm() {
    alert('Form Successfully Vaild');
  }

  templateForm() {
    alert('Form Successfully Vaild');
  }
} // End
