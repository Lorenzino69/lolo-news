import { Component, OnInit } from '@angular/core';
import {FootballService} from "../football/football.service";
import {Covid19Service} from "./covid19.service";

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss']
})
export class Covid19Component implements OnInit {

  $infos: any;
  $resultOfRequest: any;
  $url: Array<String>;
  private i: number;

  constructor(private covid19service: Covid19Service) { }

  loadAPIFootball = (e: any) => {
    this.covid19service.getInfos(e)
      .subscribe((data: any) => {
        // if there is more than one result, display 'results'
        const $word = (data.totalResults <= 1) ? `result` : `results`;
        // define resultOfRequest to display the number of results
        this.$resultOfRequest = data.articles.length;
        this.$infos = data;
        console.log(data);
      });
  }
  $inputResp: any;

  ngOnInit() {

    this.covid19service.getTopHeadLines()
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
