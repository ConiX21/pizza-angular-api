import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'pi-top-four',
  templateUrl: './top-four.component.html',
  styleUrls: ['./top-four.component.css']
})
export class TopFourComponent implements OnInit, AfterViewInit {

  title = 'app';
  pizzas: Array<Pizza> = new Array<Pizza>();
  count:number;
  
  ngOnInit(){}

  constructor() {
    // let p1: Pizza = new Pizza();
    // let p2: Pizza = new Pizza();
    // let p3: Pizza = new Pizza();
    // let p4: Pizza = new Pizza();

    // p1.idPizza = 1;
    // p1.title = 'Reine';
    // p1.description = 'Sauce tomate, champignons, jambon, ...';
    // p1.price = 12.50;
    // p1.imagePath = 'assets/bon_plan/CLASSIQUE JAMBON.png';

    // p2.IdPizza = 2;
    // p2.Title = 'Margherita';
    // p2.Description = 'Sauce tomate, jambon, ...';
    // p2.Price = 12.50;
    // p2.ImagePath = 'assets/bon_plan/MARGHERITA.png';
    // p2.Available = true;

    // p3.IdPizza = 3;
    // p3.Title = 'Originale pepperoni';
    // p3.Description = 'Sauce tomate, champignons, jambon, pepperoni, ...';
    // p3.Price = 15;
    // p3.ImagePath = 'assets/bon_plan/ORIGINALE PEPPERONI.png';

    // p4.IdPizza = 4;
    // p4.Title = 'Merguez';
    // p4.Description = 'Sauce tomate, champignons, jamboon, ...';
    // p4.Price = 12.50;
    // p4.ImagePath = 'assets/bon_plan/SPECIALE MERGUEZ.png';
    // p4.Available = true;

    // this.pizzas.push(p1, p2, p3, p4);

    this.count = this.pizzas.length;
    
  }
  
  ngAfterViewInit(){
    //Lifecycle hooks : Apres que la vue soit initialisée (manipuler la DOM)
  }

  onDetail(id){
    setTimeout(() =>{
      //console.log(this.pizzas[id - 1].Title);
    }, 2000)
  }

}
