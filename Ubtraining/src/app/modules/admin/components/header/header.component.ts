import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public uptime = new Date().toLocaleTimeString;
  constructor(private auth:AuthService) {
    this.update();
   }
  ngOnInit(): void {
  }
  logout(): void {
    this.auth.logout();
  }
  

  public updatedtime(){           
    return new Date().toLocaleTimeString();
  }
  public update():void{
    setInterval( () => {this.uptime= new Date().toLocaleTimeString;}, 1000 );
   }
}