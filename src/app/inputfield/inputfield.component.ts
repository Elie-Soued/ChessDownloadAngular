import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChessgamesstatsService } from '../chessgamesstats.service';

@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.css'],
})
export class InputfieldComponent implements OnInit {
  data: any;
  myFormController = new FormControl('');
  constructor(private pilou: ChessgamesstatsService) {}

  ngOnInit(): void {}

  updateName() {
    this.myFormController.setValue('Pilou');
  }

  getData() {
    this.pilou.getData().subscribe((value: any) => (this.data = value));
  }
}
