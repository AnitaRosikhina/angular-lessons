import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {
  // img = 'https://w7.pngwing.com/pngs/933/36/png-transparent-email-computer-icons-email-miscellaneous-angle-orange.png'
  inputValue = ''

  constructor() {
    // setTimeout( () => {
    //   console.log('done')
    //   this.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuv4t1WWQNsshdjGj9fAZeTnzrnp8kelp8rA&usqp=CAU'
    // }, 5000)
  }

  ngOnInit(): void {
  }

  onInput(event?: any) {
    console.log('Event', event)
    this.inputValue = event.target.value
  }

}
