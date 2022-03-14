import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Icontact } from '../model/icontact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
  public loading:boolean=false;
  public contacts:Icontact[]=[];
  public errorMessage:string | null = null;
  constructor(public contactService:ContactService){}

  ngOnInit(): void {
  this.loading=true;
  this.contactService.getAllContacts().subscribe((data:Icontact[])=>{
    this.contacts=data;
    this.loading=false;
    },
    (error)=>{
      this.errorMessage=error;
      this.loading=false;
    });
  }
}
