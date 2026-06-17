import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';
import { Currency } from '../../services/currency';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.page.html',
  styleUrls: ['./converter.page.scss'],
  standalone: true,
  imports: [
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  CommonModule,
  FormsModule,
  RouterLink
]
})
export class ConverterPage implements OnInit {

  fromCurrency = 'USD';

toCurrency = 'BRL';

amount = 1;

result = 0;


swapCurrencies() {

  const temp = this.fromCurrency;

  this.fromCurrency = this.toCurrency;

  this.toCurrency = temp;

}



  convert() {

  console.log('Botão clicado!');

this.currencyService
  .getRates(this.fromCurrency)
  .subscribe({

    next: (data: any) => {

      const rate =
        data.conversion_rates[this.toCurrency];

      this.result =
        this.amount * rate;

      localStorage.setItem(
        'rates',
        JSON.stringify(data)
      );

    },

    error: () => {

      const savedRates =
        JSON.parse(
          localStorage.getItem('rates') || '{}'
        );

      if(savedRates.conversion_rates){

        const rate =
          savedRates.conversion_rates[this.toCurrency];

        this.result =
          this.amount * rate;

      }

    }

    });


}

  constructor(private currencyService: Currency){ }


  

  ngOnInit() {
  }

}
