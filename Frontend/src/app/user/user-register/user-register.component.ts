import { AlertifyService } from './../../../services/alertify.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  userSubmitted:boolean;
  user:User
  registrationForm: FormGroup;
  constructor(private alertyfy:AlertifyService, private fb:FormBuilder,private userService:UserService) {}

  ngOnInit(): void {
    // this.registrationForm = new FormGroup(
    //   {
    //     userName: new FormControl('Mark', Validators.required),
    //     email: new FormControl(null, [Validators.required, Validators.email]),
    //     password: new FormControl(null, [Validators.required,Validators.minLength(8),]),
    //     confirmPassword: new FormControl(null, [Validators.required]),
    //     mobile: new FormControl(null, [Validators.required,Validators.maxLength(10),]),
    //   },
    //   this.passwordMatchingValidator
    // );
    // this.registrationForm.controls['userName'].setValue('Default Value')
    this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registrationForm = this.fb.group({
      userName:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.minLength(8)]],
      confirmPassword:[null,Validators.required],
      mobile:[null,[Validators.required,Validators.maxLength(10)]]
    },{Validators:this.passwordMatchingValidator});
  }

  userData():User{
    return this.user={
      userName:this.userName.value,
      email:this.email.value,
      password:this.password.value,
      mobile:this.mobile.value
    }
  }

  /// GETTER METHODS
  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

  passwordMatchingValidator(fb: FormGroup):Validators {
    return fb.get('password').value === fb.get('confirmPassword').value ? null:{ notMatched: true };
  }

  onSubmit() {
    this.userSubmitted = true;
    if(this.registrationForm.valid){
 //   this.user = Object.assign(this.user,this.registrationForm.value);
    this.userService.addUser(this.userData());
    this.registrationForm.reset();
    this.userSubmitted=false;
    this.alertyfy.success("Congrats,form submitted successfully");
    }else{
    this.alertyfy.error("kindly provide required fields");
    }
  }
}
