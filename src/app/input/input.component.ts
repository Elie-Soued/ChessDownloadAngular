import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../data.service';
import { TransferService } from '../transfer.service';
import { chessPlayer } from '../chessPlayer';

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

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private transferService: TransferService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.getUser();
  }

  //Setters

  setUser(value: any) {
    this.user = value;
    // console.log(value.name);
  }

  setArchive(value: any) {
    this.archives = value;
    // console.log(this.archives);
  }

  setError(value: any) {
    this.error = value;
  }

  //Other Methods

  getUser(): void {
    this.dataService.getPlayer(this.profileForm.value.username).subscribe(
      (values: any) => {
        this.setUser(values);
        // console.log(values);
      },
      (error) => {
        this.setError(error);
        // console.log(error);
      }
    );
  }

  getArchive() {
    this.dataService
      .getArchive(this.profileForm.value.username)
      .subscribe((values: any) => this.setArchive(values));
    this.sendUser(this.user);
  }

  sendUser(user: any) {
    this.transferService.sendInfo(user);
  }

  // reloadPage() {
  //   location.reload();
  // }
}
