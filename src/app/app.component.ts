import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'form';

  form1 = 'Template driven form';

  form2 = 'Reactive form';

  Getfromdata(data: any) {
    console.log(data);
  }
}
