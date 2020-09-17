import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-responsible-hover-table',
  templateUrl: './responsible-hover-table.component.html',
  styleUrls: ['./responsible-hover-table.component.scss']
})
export class ResponsibleHoverTableComponent implements OnInit {

 
  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }
  
  // values for progress-bars
  hostname = "p2_pc";
  val1 = 20;  // CPU
  val2 = 26;  // RAM
  val3 = 12;  // VMEM
  gpu = "GeForce RTX 2070, not used";
  
  getJson() {
    this.requestService.sendPostRequest().toPromise().then(res => {
      console.log(res);
      
      let result = res["result"]["0"]["Info"];
 
      this.hostname = result["Hostname"];

      // not sure which memory is for ram or vmem
      let resources = result["Resources"];
      this.val1 = resources["CPUs"];
      this.gpu = resources["GPUs"]["0"]
    });
  }
  
  isCollapsed = false;





}
