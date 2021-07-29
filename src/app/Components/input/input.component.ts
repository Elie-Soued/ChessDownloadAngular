import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../../Services/Data/data.service';
import { TransferService } from '../../Services/Transfer/transfer.service';
import { chessPlayer } from '../../Interfaces/chessPlayer';
import { archives } from '../../Interfaces/archives';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
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
    private renderer: Renderer2
  ) {}

  onSubmit() {
    this.getUser();
  }

  //Setters

  setUser(value: chessPlayer) {
    this.user = value;
    this.removePTag();
    this.addButton();
    this.sendUserInfo(this.user);
  }

  setArchive(value: archives) {
    this.archives = value;
    this.sendUserArchives(this.archives);
  }

  setError(value: HttpErrorResponse) {
    this.error = value;
    this.removeButton();
    this.addPTag();
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

  //Class Manipulation

  removeButton() {
    this.renderer.addClass(this.userDoesExists?.nativeElement, 'hidden');
  }

  addButton() {
    this.renderer.removeClass(this.userDoesExists?.nativeElement, 'hidden');
  }
  addPTag() {
    this.renderer.removeClass(this.userDoesNotExist?.nativeElement, 'hidden');
  }

  removePTag() {
    this.renderer.addClass(this.userDoesNotExist?.nativeElement, 'hidden');
  }

  removeClass(element: ElementRef) {
    this.renderer.removeClass(element?.nativeElement, 'hidden');
  }

  addClass(element: ElementRef) {
    this.renderer.addClass(element?.nativeElement, 'hidden');
  }
}
