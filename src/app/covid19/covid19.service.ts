import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(private $httpClient: HttpClient) { }
  getInfos(i: any) {

    // PUT YOUR API KEY HERE
    const $API_KEY = `861abaa2bef2405f9b0b30e09435e883`;

    return this.$httpClient.get(`https://newsapi.org/v2/everything?q=${i}&sortBy=relevance&language=fr&apiKey=` + $API_KEY );
  }

  getTopHeadLines() {

    // PUT YOUR API KEY HERE
    // const NewsAPI = require('newsapi');
    const $API_KEY = `861abaa2bef2405f9b0b30e09435e883`;

    return this.$httpClient.get(`https://newsapi.org/v2/top-headlines?q=covid&apiKey=` + $API_KEY );
  }


}
