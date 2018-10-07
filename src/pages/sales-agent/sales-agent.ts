import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Chart } from 'chart.js';


@IonicPage()
@Component({
  selector: 'page-sales-agent',
  templateUrl: 'sales-agent.html',
})

export class SalesAgentPage {
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;

  barChart:any;
  doughnutChart:any;
  today:any;
  yesterday:any;
  currweek:any;
  lastweek:any;
  Date: any = new Date();
  month: any = this.Date.getMonth();
  monthlist=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
 
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.today = this.Date.getDate()+"-"+this.monthlist[this.month]+"-"+this.Date.getFullYear();
    this.yesterday = this.Date.getDate()-1+"-"+this.monthlist[this.month]+"-"+this.Date.getFullYear();
    this.currweek = this.Date.getDate()-6+"-"+this.monthlist[this.month]+"-"+this.Date.getFullYear()+"To"+this.today;
    this.lastweek = this.Date.getDate()-8+"-"+this.monthlist[this.month]+"-"+this.Date.getFullYear()+"To";
    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }

        });

        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
          type: 'doughnut',
          data: {
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [{
                  label: '# of Votes',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.8)',
                      'rgba(54, 162, 235, 0.8)',
                      'rgba(255, 206, 86, 0.8)',
                      'rgba(75, 192, 192, 0.8)',
                      'rgba(153, 102, 255, 0.8)',
                      'rgba(255, 159, 64, 0.8)'
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56",
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]
          }

      });
  }

  doSearchProcess(){
    console.log('Wow');
  };
  
  SelectTime(){
    
  };
  
  
}
