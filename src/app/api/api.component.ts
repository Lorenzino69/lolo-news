import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  $infos: any;
  $resultOfRequest: any;
  $url: Array<String>;
  private i: number;

  constructor(private apiService: ApiService) { }

  loadAPI = (e: any) => {
    this.apiService.getInfos(e)
      .subscribe((data: any) => {
        // if there is more than one result, display 'results'
        const $word = (data.totalResults <= 1) ? `result` : `results`;
        // define resultOfRequest to display the number of results
        this.$resultOfRequest = data.articles.length;
        this.$infos = data;
        this.$url = data.articles.source;

      });
  }
  $inputResp: any;

  ngOnInit() {
    this.apiService.getTopHeadLines()
    .subscribe((data: any) => {
      // if there is more than one result, display 'results'
      const $word = (data.totalResults <= 1) ? `result` : `results`;
      // define resultOfRequest to display the number of results
      this.$resultOfRequest = data.articles.length;
      this.$infos = data;
      console.log(data);
    });
  }
}
