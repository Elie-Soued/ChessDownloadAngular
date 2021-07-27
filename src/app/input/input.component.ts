import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../data.service';
import { TransferService } from '../transfer.service';
import { chessPlayer } from '../chessPlayer';
import { archives } from '../archives';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  user?: chessPlayer;
  error?: HttpErrorResponse;
  archives?: archives;
  profileForm = this.fb.group({
    username: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private transferService: TransferService
  ) {}

  onSubmit() {
    this.getUser();
  }

  //These are the setters

  setUser(value: any) {
    this.user = value;
    this.sendUserInfo(this.user);
  }

  setArchive(value: any) {
    this.archives = value;
    this.sendUserArchives(this.archives);
    console.log(this.archives?.chess_daily.last.rating);
  }

  setError(value: any) {
    this.error = value;
  }

  //These are the getters

  getUser(): void {
    this.dataService.getPlayer(this.profileForm.value.username).subscribe(
      (values: any) => {
        this.setUser(values);
        console.log(this.user);
      },
      (error) => {
        this.setError(error);
      }
    );
  }

  getArchive() {
    this.dataService
      .getArchive(this.profileForm.value.username)
      .subscribe((values: any) => this.setArchive(values));
  }

  //These methods send Data to unrelated Components

  sendUserInfo(user: any) {
    this.transferService.sendInfo(user);
  }

  sendUserArchives(data: any) {
    this.transferService.sendArchives(data);
  }
}
