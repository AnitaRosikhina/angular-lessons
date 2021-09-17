import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUSer} from "./user.interface";

@Component({
  selector: 'app-lessons3',
  templateUrl: './lessons3.component.html',
  styleUrls: ['./lessons3.component.css']
})
export class Lessons3Component implements OnInit {
  @Input() childMessage!: string
  @Output() outputData = new EventEmitter<number>()
  @Output() status = new EventEmitter<boolean>()


  arrUsers: Array<IUSer> = [
    {
      name: 'Ivan',
      age: 22,
      status: false,
    },
    {
      name:'Petro',
      age: 33,
      status: true
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  // changeStatus(user: IUSer): void {
  //   user.status = !user.status
  // }

  sendOutputData(): void {
    this.outputData.emit(22)
  }

  changeNumber(data: boolean): void {
    this.status.emit(data)
  }
}
