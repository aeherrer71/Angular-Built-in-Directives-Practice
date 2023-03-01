import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent {

  fathers = 'Alexis';
  count = 0; 
  total = [];
  buttonPushed = false;


  constructor() { 
  
  }

  ngOnInit() {
    
  }

  onButtonPush() {
    this.buttonPushed = true;
    this.total.push(this.count = this.count + 1)
    console.log(this.total)

  }
}
