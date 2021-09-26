import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formdata={
    "fname":'',
    "lname":'',
    'email':'',
    'mobile':'',
     'department':'',
    'password':'',
     'confirmpassword':'',
     'address':''
  }
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  submit(data:NgForm){
    console.log(data)

    this._router.navigate(["/login"])


}
}
