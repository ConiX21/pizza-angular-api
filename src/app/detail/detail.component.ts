import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzasService } from '../pizzas.service';
import { Navigation } from 'selenium-webdriver';

@Component({
  selector: 'pi-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [PizzasService]
})
export class DetailComponent implements OnInit , OnChanges{
  @Input() pizza;
  @Input() id;
  constructor(private route:ActivatedRoute, public servicePizza: PizzasService) {
    this.route.params.subscribe(p =>{
      if(p["id"] != undefined && p["id"] != 0){
        this.detail(+p["id"]);
      }
    });
  }

  ngOnChanges(p){
      if(this.id != undefined && this.id != 0){
        this.detail(this.id);
      }
  }

  ngOnInit() {
    
  }

  detail(id:number){
    this.servicePizza.getPizzaDetail(id).subscribe(p => {
        this.pizza = p;
    });
  }

}
