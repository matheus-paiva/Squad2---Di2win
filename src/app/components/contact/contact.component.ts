import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
      this.contactForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-z][a-z\s]*$/)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/), Validators.email]),
      empresa: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
      tel: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[0-9]\d*$/)]),
      message: new FormControl('', [Validators.required]),
    })
  }

  get name(){
    return this.contactForm.get('name')!;
  }
  get email(){
    return this.contactForm.get('email')!;
  }
  get tel(){
    return this.contactForm.get('tel')!;
  }
  get empresa(){
    return this.contactForm.get('empresa')!;
  }
  get message(){
    return this.contactForm.get('message')!;
  }

  submit(){

    if(this.contactForm.invalid){
      return
    }

    console.log("Enviado!")
  }

}
