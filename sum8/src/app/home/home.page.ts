import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage {
  events: {
    id: number;
    name: string;
    managerName: string;
    phone: string;
    confirmed: boolean;
  }[] = [];

  addEvent(name: string, managerName: string, phone: string) {
    const newEvent = {
      id: this.events.length + 1,
      name,
      managerName,
      phone,
      confirmed: false
    };
    this.events.push(newEvent);
  }

  removeEvent(id: number) {
    this.events = this.events.filter(event => event.id !== id);
  }


}