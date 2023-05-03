import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
})
export class SignUpFormComponent {
  genders = ['male', 'female'];
  users: FormGroup;

  constructor(private http: HttpClient) {
    this.users = new FormGroup(
      {
        firstName: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern("^[a-zA-Z -']+"),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern("^[a-zA-Z -']+"),
        ]),
        dob: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required),
        phone: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$'),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '(?=.*d)(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*#?&^_-]).{8,99}'
          ),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
        state: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        country: new FormControl('', Validators.required),
        pin: new FormControl('', Validators.required),
      },
      {
        validators: this.matchPassword,
      }
    );
  }

  matchPassword: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let password = group.get('password')?.value;
    let confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { doesNot: true };
  };
  handleSubmit() {
    if (this.users.valid) {
      this.http
        .post(
          'https://fivepmbatch-80453-default-rtdb.firebaseio.com/users.json',
          this.users.value
        )
        .subscribe((response) => console.log(response));
      this.users.reset();
    } else {
      this.users.markAllAsTouched();
    }
  }
}
