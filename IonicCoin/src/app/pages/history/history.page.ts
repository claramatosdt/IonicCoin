import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    CommonModule,
    FormsModule,
    IonButton
  ]
})
export class HistoryPage implements OnInit {


  clearHistory() {

  localStorage.removeItem('history');

  this.history = [];

}

  history: any[] = [];

  constructor() { }

  ngOnInit() {
    this.history = JSON.parse(
      localStorage.getItem('history') || '[]'
    );
  }

}