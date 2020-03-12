import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alert = { title: null, message: null, alert_class: null };

  constructor() { }
  
  
  setAlert(title, message, alert_class) {
    this.alert.title = title;
    this.alert.message = message;
    this.alert.alert_class = alert_class;
  }

  getAlert() {
    return this.alert;
  }

  clearAlert() {
    this.alert.title = null;
    this.alert.message = null;
    this.alert.alert_class = null;
  }
}
