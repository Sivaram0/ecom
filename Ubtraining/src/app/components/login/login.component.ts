import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
   email:new FormControl(''),
   password: new FormControl(''),
  });
  public uptime = new Date().toLocaleTimeString;
  constructor(private auth:AuthService, private router:Router) {
    this.update();
   }
  
  ngOnInit(): void {

  }
  onSubmit(){
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/admin']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
  //date and time update
   public date(){           
     return new Date().toLocaleTimeString();
   }
   public update():void{
     setInterval( () => {this.uptime= new Date().toLocaleTimeString;}, 1000 );
    }
  public time(){
    return new Date().toLocaleDateString();
  }  
}