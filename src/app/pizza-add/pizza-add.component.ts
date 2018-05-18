import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Pizza } from '../pizza';

export function priceValue(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const input = control.value,
    isValid = isNaN(input);

    if (isValid)
      return { 'price': { input } }
    else
      return null;
  };
}


@Component({
  selector: 'pi-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.css']
})
export class PizzaAddComponent implements OnInit {
  public formPizza:FormGroup;
  constructor(public formBuilder:FormBuilder) { }

  ngOnInit() {

    this.formPizza = this.formBuilder.group({
      title: this.formBuilder.control('', Validators.required),
      description: this.formBuilder.control(''),
      price: this.formBuilder.control('', [priceValue(), Validators.required]),
      category: this.formBuilder.control(''),
   });
  }

  onSubmit(){
    let pizza = new Pizza();
    pizza.description = this.formPizza.get("description").value;
    pizza.title = this.formPizza.get("title").value;
    pizza.price = this.formPizza.get("price").value;
    console.log(pizza);
  }

}
