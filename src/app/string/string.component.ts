import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';
//import {} from '@angular/core/'

@Component({
  selector: 'pi-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css'],
  providers : [StringService]
})
export class StringComponent implements OnInit {
  public data;
  public err;

  constructor(private stringSVC:StringService) {
    // this.stringSVC.getValues()
    //     .subscribe(v => this.data = v, err => this.err = err.message)
   }

  ngOnInit() {
  }

}
