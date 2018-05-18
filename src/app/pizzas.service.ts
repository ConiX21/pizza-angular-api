import { Injectable } from '@angular/core';
import { Pizza } from './pizza';
import { Categories } from './categories.enum';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PizzasService {
  pizzas:Array<Pizza> = new Array<Pizza>();
  private path: string = "http://localhost:59293/api/"

  constructor(private http:HttpClient) { 
    // p1.ImagePath = 'assets/bon_plan/CLASSIQUE JAMBON.png';
    // p2.ImagePath = 'assets/bon_plan/MARGHERITA.png';
    // p3.ImagePath = 'assets/bon_plan/ORIGINALE PEPPERONI.png';
    // p4.ImagePath = 'assets/bon_plan/SPECIALE MERGUEZ.png';
   
  }

  getAllPizzas(): Observable<Array<Pizza>>{
    return this.http.get<Array<Pizza>>(`${this.path}pizza`);
  }

  getAllPizzasPagination(current:number): Observable<Array<Pizza>>{
    return this.http.get<Array<Pizza>>(`${this.path}pizza/${current}`);
  }

  count(): Observable<number>{
    return this.http.get<number>(`${this.path}pizza/count`);
  }

  getPizzaDetail(id:number){
    return this.http.get(`${this.path}pizza/detail/${id}`);
  }
}
