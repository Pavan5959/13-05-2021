import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular-APP';
  version='11';
  getName()
  {
    return 'Front-End'
  }
  getVersion()
  {
    return this.version
  }
  obj=
  {
      name :'Framework',
      version:'latest'
  }
  arr=['apple','banana','citrus']
}
