import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  validationForm!: FormGroup;

  constructor() {}
  

  ngOnInit(): void {
    this.validationForm = new FormGroup({
      id: new FormControl(''),
      number: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(0), Validators.maxLength(20)]),
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
      date: new FormControl('', [Validators.required, Validators.pattern(/^[0-9\/]+$/), Validators.min(0)]),
      cvv: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.minLength(3), Validators.pattern(/^[0-9]\d*$/), Validators.min(0)]),
    })

  }
  

  get number(){
    return this.validationForm.get('number')!;
  }

  get name(){
    return this.validationForm.get('name')!;
  }

  get date(){
    return this.validationForm.get('date')!;
  }

  get cvv(){
    return this.validationForm.get('cvv')!;
  }

  submit(){

    if(this.validationForm.invalid){
      return
    }

    console.log("Enviado!")
  }

}
