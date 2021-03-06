import { Component } from '@angular/core';
import { DateService } from '../shared/date.service';


@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {
  public dateService: DateService;

  constructor(public ds: DateService) {
    this.dateService = ds;
  }

  go(dir: number): any {
    this.dateService.changeMonth(dir);
  }

  goYear(dir: number): any {
    this.dateService.changeYear(dir);
  }

  public showToday(): void {
    this.dateService.showToday();
  }
  
}