import { Component, Input, OnInit } from '@angular/core';
import { SimpleTablesService } from '../services/simple-tables.service';
import { Task } from '../data/data';

@Component({
  selector: 'app-full-width-table',
  templateUrl: './full-width-table.component.html',
  styleUrls: ['./full-width-table.component.scss']
})
export class FullWidthTableComponent implements OnInit {

  tasks: Task[];
  statusColor: string[] = ["red", "orange", "blue", "green"];

  @Input()
  title: string;
  num = 0;

  constructor(private simpleTablesService: SimpleTablesService) { }

  ngOnInit() {
      this.tasks = this.simpleTablesService.getTasks();  
      this.num = this.tasks.length;
      if (this.title == "Striped Full Width Table") {
        this.num--;
      }
  }

}
