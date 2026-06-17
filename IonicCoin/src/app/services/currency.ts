import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class Currency {

  private apiKey = 'aa2b0dd941e178f0363dc2de';

  constructor(private http: HttpClient) {}

  getRates(baseCurrency: string) {

    return this.http.get(
      `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/${baseCurrency}`
    );

  }
}