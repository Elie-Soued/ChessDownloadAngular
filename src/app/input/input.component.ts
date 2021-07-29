import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
export class InputComponent implements AfterViewInit {
  @ViewChild('userExists') userDoesExists?: ElementRef;
  @ViewChild('userDoesNotExist') userDoesNotExist?: ElementRef;
  user?: chessPlayer;
  error?: HttpErrorResponse;
  archives?: archives;
  profileForm = this.fb.group({
    username: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private transferService: TransferService,
    private element: ElementRef
  ) {}

  onSubmit() {
    this.getUser();
  }

  //Setters

  setUser(value: chessPlayer) {
    this.user = value;
    console.log(this.user);
    this.sendUserInfo(this.user);
  }

  setArchive(value: archives) {
    this.archives = value;
    this.sendUserArchives(this.archives);
  }

  setError(value: HttpErrorResponse) {
    this.error = value;
  }

  //Getters

  getUser(): void {
    this.dataService.getPlayer(this.profileForm.value.username).subscribe(
      (values: chessPlayer) => {
        this.setUser(values);
      },
      (error) => {
        this.setError(error);
      }
    );
  }

  getArchive(): void {
    this.dataService.getArchive(this.profileForm.value.username).subscribe(
      (values: archives) => {
        this.setArchive(values);
      },
      (error) => {
        this.setError(error);
      }
    );
  }

  //These methods send Data to unrelated Components

  sendUserInfo(user: chessPlayer) {
    this.transferService.sendInfo(user);
  }

  sendUserArchives(data: archives) {
    this.transferService.sendArchives(data);
  }

  ngAfterViewInit() {
    // if (this.user) {
    //   this.userDoesExists?.nativeElement.setAttribute('hidden', false);
    //   this.userDoesNotExist?.nativeElement.setAttribute('hidden', true);
    // } else if (this.error) {
    //   this.userDoesExists?.nativeElement.setAttribute('hidden', true);
    //   this.userDoesNotExist?.nativeElement.setAttribute('hidden', false);
    // } else {
    //   this.userDoesExists?.nativeElement.setAttribute('hidden', false);
    //   this.userDoesNotExist?.nativeElement.setAttribute('hidden', false);
    // }
  }
}
