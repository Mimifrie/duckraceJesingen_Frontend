import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  rankingData: any[] = [];
  originalData: any[] = [];
  searchText: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchRankingData();
  }

  

  fetchRankingData(): void {
    //const apiUrl = 'https://h2918194.stratoserver.net:8443/duckraceJesingen/rank/1';
    const apiUrl = 'http://localhost:8080/rank/1';
    this.http.get<any[]>(apiUrl).subscribe((data: any[]) => {
      this.rankingData = data;
      this.originalData = data;
    });
  }

  applyFilter(): void {
    if (this.searchText) {
      this.rankingData = this.originalData.filter(entry => {
        return entry.ducknumber.toString() === this.searchText;
      });
    } else {
      this.rankingData = this.originalData;
    }
  }
}
