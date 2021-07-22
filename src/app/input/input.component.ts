import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  user?: any;
  // error?: string = 'HttpErrorResponse';
  archives: any;
  profileForm = this.fb.group({
    username: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {}

  onSubmit() {
    // console.log(this.profileForm.value);
    this.getUser();
  }

  getUser(): void {
    this.dataService
      .doesPlayerExist(this.profileForm.value.username)
      .subscribe((values: any) => {
        this.setUser(values);
        console.log(values);
      });
  }

  setUser(value: any) {
    this.user = value.name;
    console.log(value.name);
    // console.log(this.user);
  }

  getArchive() {
    this.dataService
      .getArchive(this.profileForm.value.username)
      .subscribe((values: any) => console.log(values));
  }
}
