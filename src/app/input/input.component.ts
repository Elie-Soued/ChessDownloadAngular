import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { chessPlayer } from '../chessPlayer';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  user?: chessPlayer;
  error?: HttpErrorResponse;
  archives = {};
  profileForm = this.fb.group({
    username: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.getUser();
  }

  getUser(): void {
    this.dataService.getPlayer(this.profileForm.value.username).subscribe(
      (values: any) => {
        this.setUser(values);
        console.log(values);
      },
      (error) => {
        this.setError(error);
        console.log(error);
      }
    );
  }

  setUser(value: any) {
    this.user = value.name;
    console.log(value.name);
  }

  setArchive(value: any) {
    this.archives = value;
    console.log(this.archives);
  }

  setError(value: any) {
    this.error = value;
  }

  getArchive() {
    this.dataService
      .getArchive(this.profileForm.value.username)
      .subscribe((values: any) => this.setArchive(values));
  }

  // reloadPage() {
  //   location.reload();
  // }
}
