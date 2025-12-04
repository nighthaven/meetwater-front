import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {Swimmer} from '../../services/get-swimmers/swimmer.model';
import {GetSwimmers} from '../../services/get-swimmers/get-swimmers';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sidebar-swimmers',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './sidebar-swimmers.html',
  styleUrl: './sidebar-swimmers.scss',
})
export class SidebarSwimmers {
  swimmers$: Observable<Swimmer[]>;

  constructor(private getSwimService: GetSwimmers) {
    this.swimmers$ = this.getSwimService.getSwimmers()
  }

}
