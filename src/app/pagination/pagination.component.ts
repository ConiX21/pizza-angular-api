import { Component, OnInit, 
  Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'pi-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() pages;
  @Output() changeEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
  }

  change(page:number){
    this.changeEvent.emit(page);
  }

}
