import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PizzasComponent } from './pizzas/pizzas.component';
import { RouterModule, Routes } from '@angular/router';
import { TopFourComponent } from './top-four/top-four.component';
import { StringComponent } from './string/string.component';
import { StringService } from './string.service';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';
import { DetailComponent } from './detail/detail.component';
import { PizzaAddComponent } from './pizza-add/pizza-add.component';
import { AuthComponent } from './auth/auth.component';


const routes:Routes = [
  { path: '', component: TopFourComponent },
  { path: 'login', component: AuthComponent },
  { path: 'pizzas', component: PizzasComponent },
  { path: 'string', component: StringComponent },
  { path: 'pizzas/add', component: PizzaAddComponent },
  { path: 'pizzas/detail/:id', component: DetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    TopFourComponent,
    StringComponent,
    PaginationComponent,
    DetailComponent,
    PizzaAddComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
