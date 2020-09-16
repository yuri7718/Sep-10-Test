import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-responsible-hover-table',
  templateUrl: './responsible-hover-table.component.html',
  styleUrls: ['./responsible-hover-table.component.scss']
})
export class ResponsibleHoverTableComponent implements OnInit {

  json;
  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }

  getJson() {
    this.json = this.requestService.sendPostRequest();
  }
  
  isCollapsed = false;
}
