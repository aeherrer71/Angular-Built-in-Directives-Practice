import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {

  showSecret = false;
  log = [];

  constructor() { 
  
  }

  ngOnInit() {
    
  }

  onButtonPush() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1)
    this.log.push(new Date())

  }
}
