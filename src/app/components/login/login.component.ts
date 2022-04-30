import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
   faLock = faLock;
  emailForm = new FormGroup({
    email: new FormControl('',Validators.required),
   // code: new FormControl('',[Validators.required,Validators.minLength(4)]),
  });
  codeForm = new FormGroup({
    //code: new FormControl('',Validators.required),
   code: new FormControl('',[Validators.required,Validators.minLength(2)]),
  });
  code: string;

  constructor( private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
   this.router.navigate(['/']);
  }
 
  onSubmit(): void {

         console.log(this.emailForm.value);
         console.log(this.emailForm.get('email')?.value);
         console.log(this.emailForm.value.email)
         console.log(this.codeForm.get('code')?.value);
        window.localStorage.setItem("email",this.emailForm.value.email);
        
         this.allowUser(this.codeForm.value.code);
         
    }
  checkAlive(alive: string) {
    console.log(alive+"mail alive")
    if(alive==this.emailForm.value.email)
    {
      console.log("entered if");
      alert("User already logged in other browser logout there to login here");
    }
  }

    onClick():void{
      console.log(this.emailForm.value.email);
      this.authService.getStatus(this.emailForm.value.email).subscribe((data:any)=>{
        
       window.localStorage.setItem("checkUser",data);
        var alive=localStorage.getItem("email");
        this.checkAlive(alive);
        this.code=localStorage.getItem("checkUser");
        console.log("code : "+this.code);
     
      })
    }
  allowUser(code: string) {
  if(code==this.code)
  {
    this.router.navigate(['/welcome']);
  }
  else{
    alert("Incorrect UserName or Password");
  }
}

}
 
