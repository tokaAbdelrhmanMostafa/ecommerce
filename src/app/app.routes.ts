import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { LoginComponent } from './pages/login/login.component';
import { Routes } from '@angular/router';

import { ProductComponent } from './pages/product/product.component';
import { SpinerComponent } from './spiner/spiner.component';
export const routes: Routes = [
    {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
    },
    {
        path:"home",
        component:ProductComponent
    },
    {
        path:"detaails/:id",
        component:ProductDetailsComponent
    },
  
   
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"",
        component:LoginComponent,
        children:[
            {
                path:"home",
               component:ProductComponent
            },
            {
                path:"spinner",
               component:SpinerComponent
            }

        ]
    }


];
