import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   implements OnInit{
  title = 'singals';
  myOb!: { dodo: string; bb: string; date: Date; };
  public currentDate!: Date;
  

  ngOnInit(): void {
    this.myOb = {dodo: 'AA', bb:'bbb', date: new Date()};
    this.currentDate = new Date();
  }

  changeDate(){
    this.myOb.dodo = this.myOb.dodo + 'A'
    this.myOb.bb = this.myOb.bb + 'b'
    this.myOb.date = new Date(this.myOb.date.getFullYear(), this.myOb.date.getMonth(), this.myOb.date.getDate() + 1);
    console.log(this.myOb.date);
    
  }
  switchToNextMonth() {
    this.incrementMonth(1);
  }

  switchToPrevMonth() {
    this.incrementMonth(-1);
  }

  private incrementMonth(delta: number): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + delta,
      this.currentDate.getDate() + delta);
  }
}
