import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class DateService {
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject<moment.Moment>(moment().locale('uk'));
  public selectedDate: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment().locale('uk'));
  changeMonth(dir: number): void {
    const value = this.date.value.add(dir, 'month');
    this.date.next(value);
  }

  changeYear(dir: number): void {
    const value = this.date.value.add(dir, 'year');
    this.date.next(value);
  }

  changeDate(date: moment.Moment): void {
    const value = this.date.value.set({
      date: date.date(),
      month: date.month()
    });
    this.date.next(value);
  }

  showToday(): void {
    this.date.next(moment().locale('uk'));
    this.selectedDate.next(moment().locale('uk'));
  }
}