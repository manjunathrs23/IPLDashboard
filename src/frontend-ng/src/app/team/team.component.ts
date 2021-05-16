import { Component, OnInit, ViewChild } from "@angular/core"
import { IplResponse } from "../shared/model/ipl-response";
import { SharedService } from "../shared/shared.service";

import {
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    ChartComponent,
    ApexTheme
  } from "ng-apexcharts";
import { Match } from "../shared/model/match";

  export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
    theme: ApexTheme;
  };


@Component({
    selector: 'team-component',
    templateUrl: './team.component.html'
})
export class TeamComponent implements OnInit{
    
    teamNames : string[];
    iplResponse : IplResponse;
    errorMessage : string;
    showMatchDetails = true;
    toggleMessage = "Hide";
    lastMatch: Match;
    oppoTeam: string;

    numberOfWins = 50;
    numberOfLose = 50;

    @ViewChild("chart",null) chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    

    constructor(private sharedService: SharedService) {
        
      }

    chartInitialize() : void {
      this.chartOptions = {
        series: [this.numberOfWins, this.numberOfLose],
        chart: {
          width: 250,
          type: "pie"
        },
        labels: ["Win", "Lose"],
        theme: {
          monochrome: {
            enabled: true
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 100
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
    }

    ngOnInit() : void {
        
        this.sharedService.getTeamNames().subscribe({
            next: (resp: string[]) => this.teamNames = resp,
            error: err => this.errorMessage = err
        })
    }

   

    teamSelected(teamName : string){
        console.log(teamName);
        this.sharedService.getMatchDetails(teamName).subscribe({
            next: (resp: IplResponse) => {
              this.iplResponse = resp;
              this.numberOfWins = resp.totalWins;
              this.numberOfLose = resp.totalMatches - resp.totalWins;
              this.lastMatch = resp.matches[0];
            },
            error: err => this.errorMessage = err,
            complete: () => this.chartInitialize()
          });

          

    }

    showDetails() {
        return this.showMatchDetails;
    }

    teamName(iplResponse : IplResponse, match : Match): string{
      this.oppoTeam = match.team1 === iplResponse.teamName ? match.team2 : match.team1
      return this.oppoTeam;
    }

    toggleDetails() {
        this.showMatchDetails = !this.showMatchDetails;
        if(this.showMatchDetails) {
            this.toggleMessage = "Hide";
        } else {
            this.toggleMessage = "Show";
        }
    }

}