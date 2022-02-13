import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  constructor() { }
  login=new FormGroup({
    'fname':new FormControl('', [Validators.required]),
    'pass':new FormControl('', [Validators.required, Validators.minLength(7)]),
    'lname':new FormControl('', [Validators.required]),
    'mail':new FormControl('', [Validators.required, Validators.email])
   })


  onSubmit(){
    console.log(this.login.value);
  }
  get fname(){
    return this.login.get('fname');
  }

}
