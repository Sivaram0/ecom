 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { map } from 'rxjs/operators';
// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   getStudent() {
//     throw new Error('Method not implemented.');
//   }

//   constructor(private _http:HttpClient) { }
//   //post/get/put/delet method
// //post
//   postStudent(data:any){
//     return this._http.post<any>("http://localhost:3000/posts",data).pipe(
//       map(
//         ((res: any) =>{
//           return res;
//         })
//      )
//     )
//   }
// }
// //get
// getStudent(){
//   return this._http.get<any>("http://localhost:3000/posts").pipe(
//     map(
//       ((res: any) =>{
//         return res;
//       })
//    )
//   )
// }
// postStudent(data,id){
//   return this._http.post<any>("http://localhost:3000/posts/"+id,data).pipe(
//     map(
//       ((res) =>{
//         return res;
//       })
//    )
//   )
// }
// deleteStudent();{
//   return this._http.delete<any>("http://localhost:3000/posts",data).pipe(
//     map(
//       ((res: any) =>{
//         return res;
//       })
//    )
//   )
// }



// function getStudent() {
//   throw new Error('Function not implemented.');
// }

// function deleteStudent(id: any, number: any) {
//   throw new Error('Function not implemented.');
// }






