import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  sh:any;
  isChecked: boolean =true;

  registrationForm!: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-z][a-z\s]*$/)]),
      cpf: new FormControl('', [Validators.required, Validators.minLength(15)]),
      tel: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[0-9]\d*$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      businessName: new FormControl('', [Validators.required]),
      CNPJ: new FormControl('', [Validators.required]),
   
    })
  }

  get name(){
    return this.registrationForm.get('name')!;
  }
  get cpf(){
    return this.registrationForm.get('cpf')!;
  }
  get tel(){
    return this.registrationForm.get('tel')!;
  }
  get email(){
    return this.registrationForm.get('email')!;
  }
  get password(){
    return this.registrationForm.get('password')!;
  }
  get businessName(){
    return this.registrationForm.get('businessName')!;
  }
  get CNPJ(){
    return this.registrationForm.get('CNPJ')!;
  }

  submit(){

    if(this.registrationForm.invalid){
      return
    }

    console.log("Enviado!")
  }

}
