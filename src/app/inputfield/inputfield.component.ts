import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.css'],
})
export class InputfieldComponent implements OnInit {
  data: any;
  myFormController = new FormControl('');
  constructor() {}

  ngOnInit(): void {}

  updateName() {
    this.myFormController.setValue('Pilou');
  }
}
