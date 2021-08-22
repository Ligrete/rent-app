import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LogInModel } from 'src/app/models/auth/auth.model';
import { AuthService } from 'src/app/services/auth/auth.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(11),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logIn() {
    console.log('click login');
    
    const logInData: LogInModel = {
      email: this.emailFormControl.value,
      password: this.passwordFormControl.value
    }
    this.authService.logIn(logInData).subscribe((resp) => {
      console.log('login resp', resp);
    })
  }
}
