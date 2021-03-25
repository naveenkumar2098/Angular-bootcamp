import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  @ViewChild ('f') signup = 'NgForm';
  defaultQuestion = 'Delhi';
  genders = ['Male', 'Female'];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signup);
  }

}
