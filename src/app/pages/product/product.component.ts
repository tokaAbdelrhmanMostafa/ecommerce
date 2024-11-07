import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { CommonModule } from '@angular/common';
import { SpinerComponent } from "../../spiner/spiner.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HttpClientModule, CommonModule, SpinerComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
products:any []=[]
catogeries:any[]=[]
constructor(private services:ServicesService){}
ngOnInit():void {
this.getAllProduct()
this.getcat()

}
getAllProduct(){
  this.services.getAllProduct().subscribe((res:any)=>{
this.products=res


  })
}
getcat(){
  this.services.geAlltcat().subscribe((res:any)=>{
    
    this.catogeries=res
    console.log(res);
    
  })
}

filter(event :any){

let val=event.target.value
if(val == "All"){
  this.getAllProduct();
  return;
}
this.showcat(val)
}
showcat(word :string){
  this.services.getProductcat(word).subscribe((res:any)=>{
    
    this.products=res
    console.log(res);
    
  })}
  add(){
    
  }
}
