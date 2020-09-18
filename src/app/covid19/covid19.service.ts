import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  API_KEY_NEW =`f82fcde0907d62d45faab633c6211d4f`;


  constructor(private $httpClient: HttpClient) { }
  getInfos(i: any) {


    return this.$httpClient.get(`https://gnews.io/api/v4/search?q=${i}&languages=fr&token=` + this.API_KEY_NEW );
  }

  getTopHeadLines() {


    return this.$httpClient.get(`https://gnews.io/api/v4/top-headlines?country=fr&q=covid&token=` + this.API_KEY_NEW );
  }


}
