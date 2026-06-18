import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonItem,IonLabel,IonSelect,IonSelectOption } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonItem,IonLabel,IonSelect,IonSelectOption, CommonModule, FormsModule,RouterLink]
})
export class SettingsPage implements OnInit {

  updateFrequency = '24h';

  constructor() { }

  ngOnInit() {

    const savedFrequency =
    localStorage.getItem('updateFrequency');

  if (savedFrequency) {

    this.updateFrequency =
      savedFrequency;

  }

   }

   saveSettings() {

  localStorage.setItem(
    'updateFrequency',
    this.updateFrequency
  );

}

}
