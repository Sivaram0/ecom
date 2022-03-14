import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Icontact } from './model/icontact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
 private serverUrl:string=`http://localhost:9000`; //json server url
  constructor(private httpClient:HttpClient) {
 }
// GET all contact
    public getAllContacts():Observable<Icontact[]>{
    let dataURL:string=`${this.serverUrl}/contacts`;
    return this.httpClient.get<Icontact[]>(dataURL).pipe();
 }
}
//GET single contact


//create contact

//Error handler

 






