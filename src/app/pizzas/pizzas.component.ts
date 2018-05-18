import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PizzasService } from '../pizzas.service';
import { Pizza } from '../pizza';
import { Categories } from '../categories.enum';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';
import { StringService } from '../string.service';

@Component({
  selector: 'pi-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css'],
  providers: [PizzasService, StringService]
})
export class PizzasComponent implements OnInit {
  @ViewChild("myPager") myPager: PaginationComponent;
  public pizzas : any;
  public err;
  public pages = [];
  //private route: ActivatedRoute,
  
  private currentPage: number;

  constructor(public ref:ElementRef, public nav:Router, private pizzasSVC:PizzasService, private stringSvc : StringService) {
    console.log(ref.nativeElement)
  }

  ngOnInit() {

    let token = sessionStorage.getItem("token");
    this.stringSvc.getValues(token).subscribe(v => console.log(v), 
    err => {
      if(err.status == 401){
        this.nav.navigate(["login"]);
      }
    }
  );
    
    //this.currentPage = +this.route.snapshot.paramMap.get('current');
    //console.log(this.myPager)
    this.pizzasSVC.getAllPizzasPagination(0)
        .subscribe((pizzas) => {
          //console.log(pizzas);
          this.pizzas = pizzas;
        }, this.error);

        this.pizzasSVC.count()
        .subscribe((count) => {
          for(let i = 0; i < count; i++){
            this.pages.push(i);
          }
        }, this.error);
  }

  error(err){
    this.err = err.message
  }

  change(page){
    //this.currentPage = +this.route.snapshot.paramMap.get('current');
    this.pizzasSVC.getAllPizzasPagination(page)
        .subscribe((pizzas) => {
          this.pizzas = pizzas;
        }, this.error);
  }
}
