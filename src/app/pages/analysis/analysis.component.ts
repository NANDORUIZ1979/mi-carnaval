import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../shared/services/analysis.service';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-analysis',
  standalone: true,
  imports: [],
  templateUrl: './analysis.component.html',
  styleUrl: './analysis.component.css'
})
export class AnalysisComponent implements OnInit {
  public chart: any = null;
  private data: AnalysisChart[] = [];

  constructor(
    private analysisService: AnalysisService
  ){
  }

  ngOnInit(): void {
      this.getAnalysis();
      this.setChart();
  }

  getAnalysis(): void {
    this.analysisService.getAnalysis().subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }

  setChart(): void {
    const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: Utils.numbers(NUMBER_CFG),
      backgroundColor: [
        Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        Utils.transparentize(Utils.CHART_COLORS.orange, 0.5),
        Utils.transparentize(Utils.CHART_COLORS.yellow, 0.5),
        Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
        Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      ]
    }
  ]
};
    // Creamos la gráfica
    this.chart = new Chart(
      'chart',
      {
        type: 'doughnut',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      }
    )
  }
}
