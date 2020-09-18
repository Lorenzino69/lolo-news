import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {FootballService} from "./football.service";

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.scss']
})
export class FootballComponent implements OnInit {

  @Input()
  isExpanded

  $infos: any;
  $resultOfRequest: any;
  $url: Array<String>;
  private i: number;

  constructor(private footballservice: FootballService) { }

  // loadAPI = (e: any) => {
  //   this.footballservice.getInfos(e)
  //     .subscribe((data: any) => {
  //       // if there is more than one result, display 'results'
  //       const $word = (data.totalResults <= 1) ? `result` : `results`;
  //       // define resultOfRequest to display the number of results
  //       this.$resultOfRequest = `${data.totalResults.toLocaleString()} ${$word}`;
  //       this.$infos = data;
  //       this.$url = data.articles.source;
  //       for(this.i = 0; this.i < data.articles.length; this.i++ ){
  //         this.$url = data.articles[this.i].source.name;
  //         console.log(this.$url);
  //       }
  //       console.log(this.$url);
  //     });
  // }

  loadAPIFootball = (e: any) => {
    this.footballservice.getInfos(e)
      .subscribe((data: any) => {
        // if there is more than one result, display 'results'
        const $word = (data.totalResults <= 1) ? `result` : `results`;
        // define resultOfRequest to display the number of results
        this.$resultOfRequest = `${data.totalResults.toLocaleString()} ${$word}`;
        this.$infos = data;
        console.log(data);
      });
  }

  ngOnInit() {
    this.isExpanded =false;

      this.footballservice.getTopHeadLines()
        .subscribe((data: any) => {
          // if there is more than one result, display 'results'
          const $word = (data.totalResults <= 1) ? `result` : `results`;
          // define resultOfRequest to display the number of results
          this.$resultOfRequest = `${data.totalResults.toLocaleString()} ${$word}`;
          this.$infos = data;
          console.log(data);
        });
    }


}
