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
  statusColor: string[] = ["#dd4b39", "#f39c12", "#3c8dbc", "#00a65a", "#da21e6"];

  @Input()
  title: string;

  num: number;
  currentPage = 1;
  itemsPerPage = 4;
  pageSize = 0;
  pagination = true;

  constructor(private simpleTablesService: SimpleTablesService) { }

  ngOnInit() {
      this.tasks = this.simpleTablesService.getTasks();  
      this.num = this.tasks.length;
      if (this.title == "Striped Full Width Table") {
        this.num--;
        this.pagination = false;
      }
  }

  onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage*(pageNum - 1);
  }
  
}
