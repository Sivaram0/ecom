import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menn',
  templateUrl: './menn.component.html',
  styleUrls: ['./menn.component.css']
})
export class MennComponent implements OnInit {
  public rs:number=0;
  constructor() { }

  ngOnInit(): void {
  }
 public add():void{
   this.rs = this.rs +1;
 }
 public remove(){
   this.rs  =  this.rs -1 > 0 ? this.rs -1 : 0; 
 }
}