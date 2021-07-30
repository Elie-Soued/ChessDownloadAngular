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
  @ViewChild('userExists') userDoesExist = {} as ElementRef;
  @ViewChild('userDoesNotExist') userDoesNotExist = {} as ElementRef;
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
    this.sendUserInfo(this.user);
    this.addHiddenClass(this.userDoesNotExist);
    this.removeHiddenClass(this.userDoesExist);
  }

  setArchive(value: archives) {
    this.archives = value;
    this.sendUserArchives(this.archives);
  }

  setError(value: HttpErrorResponse) {
    this.error = value;
    this.addHiddenClass(this.userDoesExist);
    this.removeHiddenClass(this.userDoesNotExist);
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
  removeHiddenClass(element: ElementRef) {
    this.renderer.removeClass(element.nativeElement, 'hidden');
  }

  addHiddenClass(element: ElementRef) {
    this.renderer.addClass(element.nativeElement, 'hidden');
  }
}
