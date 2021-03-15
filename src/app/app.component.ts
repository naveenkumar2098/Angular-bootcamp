import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  elementVisibility = false;
  items = ['car', 'train', 'bus', 'bike', 'airplane'];
  status: boolean = false;
  name = "Default Value";

  toggleElementVisibility() {
    this.elementVisibility = !this.elementVisibility;
  }

  clickEvent(){
    this.status = !this.status;       
  }

}
