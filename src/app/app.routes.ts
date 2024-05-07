import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AddtoolPageComponent } from './components/addtool-page/addtool-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';

export const routes: Routes = [
    { path: "", redirectTo: "Order", pathMatch: "full" },
    { path: "Order", component: OrderPageComponent },
    { path: "Search", component: SearchPageComponent },
    { path: "Login", component: LoginPageComponent },
    { path: "Add Tool", component: AddtoolPageComponent },
    { path: "Signup", component: SignupPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }