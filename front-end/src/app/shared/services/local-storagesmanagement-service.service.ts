import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoragesmanagementServiceService {

  constructor() { }
  addToCart(data:any){
    localStorage.setItem('cart',JSON.stringify(data));
  }

  getCartFromLocalStorage(){
    return JSON.parse(localStorage.getItem('cart') || 'null');
  }
}
