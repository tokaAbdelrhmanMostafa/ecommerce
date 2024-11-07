import { product } from './../../interface/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  card:product[]=[]
  api="https://fakestoreapi.com/products"
 

  constructor(private http: HttpClient) { }
  getAllProduct(){
    return this.http.get(this.api)
  }
  geAlltcat(){
    return this.http.get("https://fakestoreapi.com/products/categories")
  }
  getProductcat(word :string){
    const url=`https://fakestoreapi.com/products/category/${word}`;
    return this.http.get(url)
  }
}
