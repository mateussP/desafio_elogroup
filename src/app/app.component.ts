import { Component } from '@angular/core';
import { AlertService } from './services/alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Desafio';

  constructor(public alertService: AlertService){}

  getAlert(){
    return this.alertService.getAlert();
  }

  clearAlert(){
    this.alertService.clearAlert();
  }
}

