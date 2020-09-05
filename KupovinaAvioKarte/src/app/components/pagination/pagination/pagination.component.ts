import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  collection = [];
  constructor() {
    for (let i = 1; i <= 100; i++) {
    this.collection.push(`item ${i}`);
  } }

  ngOnInit() {
  }
  getPageSymbol(current: number) {
    return ['Kupovina', 'Dodatno', 'Plaćanje', 'Vaš let'][current - 1];
  }
  

}
