import { Component, OnInit } from '@angular/core';
import { SolService } from '../services/sol.service';
import { getLocaleDateFormat } from '@angular/common';
import { Sol } from '../model/sol';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sols: Array<Sol> = [];

  constructor(private solService: SolService) { }

  ngOnInit(): void {

    this.getData();
    // this.showData(this.getData());
  }

  getData() {
    this.solService.getData().subscribe(v => v.sol_keys.map(
      k => {
        let sol: Sol = v[k];
        sol.key = k;
        this.sols.push(sol);
      }
    ));

    return this.sols;
  }

  showData(sols: Array<Sol>) {




  }
}
