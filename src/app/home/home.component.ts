import { Component, OnInit, OnDestroy } from '@angular/core';
import { SolService } from '../services/sol.service';
import { Sol } from '../model/sol';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  sols: Array<Sol> = [];
  isCelsiusActive: boolean = true;
  subscription: Subscription;

  constructor(private solService: SolService) { }

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getData() {
    this.subscription = this.solService.getData().subscribe(v => v.sol_keys.map(
      k => {
        let sol: Sol = v[k];
        sol.key = k;
        this.sols.push(sol);
      }
    ));

    return this.sols;
  }

  toCelsius() {

    if (!this.isCelsiusActive) {
      this.isCelsiusActive = true;

      this.sols.map(value => {
        let mn = value.AT.mn;
        let mx = value.AT.mx;

        value.AT.mn = (mn - 32) / 1.8;
        value.AT.mx = (mx - 32) / 1.8;
      })
    }
  }

  toFahrenheit() {
    if (this.isCelsiusActive) {
      this.isCelsiusActive = false;

      this.sols.map(value => {
        let mn = value.AT.mn;
        let mx = value.AT.mx;

        value.AT.mn = mn * 1.8 + 32;
        value.AT.mx = mx * 1.8 + 32;
      });
    }
  }

}
