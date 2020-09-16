import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-tables',
  templateUrl: './simple-tables.component.html',
  styleUrls: ['./simple-tables.component.scss']
})
export class SimpleTablesComponent implements OnInit {

  stripedTitle: string = "Striped Full Width Table";
  simpleTitle: string = "Simple Full Width Table";
  
  constructor() { }

  ngOnInit() {
  }

}
