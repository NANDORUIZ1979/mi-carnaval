import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../shared/services/analysis.service';
import { Chart, ChartType } from 'chart.js/auto';
import { ChartJsUtils } from '../../shared/utils/ChartJsUtils';
import { AnalysisChart } from '../../shared/models/analysis-chart';
import { Console } from 'console';
import { finalize } from 'rxjs';
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { environment } from '../../../environments/environment';

export interface DoughnutModel {
  total: number;
  pais: string;
}

@Component({
    selector: 'app-analysis',
    templateUrl: './analysis.component.html',
    styleUrl: './analysis.component.css',
    imports: [LoadingComponent]
})
export class AnalysisComponent implements OnInit {
  public isLoading: boolean = true;
  public chart: any = null;
  private utils: ChartJsUtils;
  private doughnutModel: DoughnutModel[] = [];

  constructor(
    private analysisService: AnalysisService
  ){
    this.utils = new ChartJsUtils();
    this.getAnalysis();
    console.log('ENVIRONMENT', environment.key_openapi);
  }

  ngOnInit(): void {
    this.utils = new ChartJsUtils();
  }

  getAnalysis(): void {
    this.analysisService.getAnalysis()
      .pipe(finalize( () => this.setChart()))
      .subscribe(analisisPasto => {
        this.doughnutModel = this.groupData(analisisPasto);
      });

  }

  setChart(): void {
    this.isLoading = false;
    console.log('setChart');

    const labels = this.doughnutModel.map(m => m.pais);
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: this.doughnutModel.map(m => m.total),
          backgroundColor: [
            this.utils.transparentize(this.utils.CHART_COLORS.red, 0.5),
            this.utils.transparentize(this.utils.CHART_COLORS.orange, 0.5),
            this.utils.transparentize(this.utils.CHART_COLORS.yellow, 0.5),
            this.utils.transparentize(this.utils.CHART_COLORS.green, 0.5),
            this.utils.transparentize(this.utils.CHART_COLORS.blue, 0.5),
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
      });
  }

  groupData(data: AnalysisChart[]): DoughnutModel[] {
    const agrupado: DoughnutModel[] = [];

    data.forEach(item => {
      const pais = item.pais;

      // Buscar si ya existe el grupo con el mismo país y año
      const grupoExistente = agrupado.find(x => {
        if (x.pais == pais) {
          return { total: item.total, pais: pais };
        }
        return false;
      });

      if (!grupoExistente) {
        agrupado.push({ ...{ total: item.total, pais: pais } }); // Si no existe, se agrega
      } else {
        grupoExistente.total += item.total; // Si existe, sumar el total
      }
    });
    return agrupado;
  }
}
