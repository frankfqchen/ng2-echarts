import {Directive, ElementRef, Input, OnDestroy} from '@angular/core';

@Directive({
	selector: '[ng2-echarts]',
	exportAs: 'ng2Echarts'
})
export class Ng2Echarts implements OnDestroy {
	hostElement: ElementRef;
	//pChart: HighchartsChartObject;
  pChart: EchartsChartObject;
	constructor(ele: ElementRef) {
		this.hostElement = ele;
	}

	//@Input('ng2-highcharts') set options(opt: HighchartsOptions) {
  @Input('ng2-echarts') set options(opt: EchartsOptions) {
		if (!opt) {
			console.log('No valid options...');
			console.log(opt);
			return;
		}
		if (opt.series || opt.data) {
			if (this.pChart) {
				this.pChart.destroy();
			}
			if (!opt.chart) {
				opt.chart = {};
			}
			opt.chart.renderTo = this.hostElement.nativeElement;
			//this.pChart = new Highcharts.Chart(opt);
      this.pChart = new Echarts.Chart(opt);
		} else {
			console.log('No valid options...');
			console.dir(opt);
		}
	}


	//public get chart() : HighchartsChartObject {
  public get chart(): EchartChartObject {
		return this.pChart;
	}

	ngOnDestroy() {
		if (this.pChart) {
			this.pChart.destroy();
		}
	}
}
