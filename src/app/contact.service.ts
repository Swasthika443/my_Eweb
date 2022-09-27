import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
 
  constructor() { }
  con : Contact[] =[
    {
      pname: "Raj",
      pemailid:"Raj1234@gmail.com",
      pnumber: 9087654321,
      paddress: "Palace"
    },
    {
    pname: "Johny",
    pemailid:"Johny4321@gmail.com",
      pnumber: 9879657456,
      paddress: "SDMIT"
    }
  ];
  public getContactDetails(): any{
  const conObservable = new Observable(observe =>{
    setTimeout(() => {
      observe.next(this.con);
    },1000);
  });
  return conObservable;
  }
}
