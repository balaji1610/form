import { Component } from '@angular/core';

import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

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
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    pswd: new FormControl(
      '',
      Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}')
    ),
    number: new FormControl('', Validators.minLength(10)),
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

  get vpswd() {
    return this.registerV2.get('pswd');
  }

  get vnumber() {
    return this.registerV2.get('number');
  }
} // End
