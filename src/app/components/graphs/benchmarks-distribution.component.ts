import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {IBenchmarkFilter, ISeriesProvider, IStatsDistributionInYears} from '../../app.interfaces';
import {IChartHeatmap} from '../../thirdparty/ngx-charts-universal/chart.interface';
import {Utils} from '../../model/utils';
import {Consts} from '../../model/consts';
import {marker} from 'leaflet';

@Component({
	selector: 'graph[benchmarks-distribution]',
	template: `
		<div class="graph-title">{{title}}</div>
		<div class="benchmark-select">
			<div class="select-radios">
				<div>Value Group</div>
				<label class="checkbox" *ngFor="let group of benchmark_groups">
					<input [value]="group" name="group" type="radio" [(ngModel)]="active.benchmark_group" (change)="handleGroupChange()">
					{{group.name}}
				</label>
			</div>
			<div class="select-radios" *ngIf="active.benchmark_group">
				<div>Value</div>
				<label class="checkbox" *ngFor="let bench of active.benchmark_group.benchmarks">
					<input [value]="bench" name="bench" type="radio" [(ngModel)]="active.benchmark" (change)="handleBenchmarkChange()">
					{{bench.name}}
				</label>
			</div>
			<div class="select-checks">
				<div>Comparision</div>
				<label class="checkbox" *ngFor="let filter of filters">
					<input [value]="true" name="filter" type="checkbox" [(ngModel)]="filter.active" (change)="handleFilterChange()">
					{{filter.name}}
				</label>
			</div>
		</div>
		<ngx-charts-heat-map-grid
				class="chart-container"
				[chart]="graph.chart"
				[data]="graph.data"
				[marker]="marker"
				(select)="graph.select($event)"
				(legendLabelClick)="graph.onLegendLabelClick($event)"></ngx-charts-heat-map-grid>
		<select-series-download-button [sender]="this"></select-series-download-button>
	`,
	styleUrls: ['benchmarks.component.scss']
})
export class GraphBenchmarksDistributionComponent implements OnChanges, ISeriesProvider {
	@Input()
	title: string;
	@Input()
	entityTitle: string;
	@Input()
	othersTitle: string;
	@Input()
	data: IStatsDistributionInYears;
	@Input()
	highlight: {
		year: string;
		values: {
			[key: string]: number;
		};
	};
	@Input()
	filters: Array<IBenchmarkFilter> = [];
	@Output()
	filtersChange = new EventEmitter();

	histogram_distribution: IChartHeatmap = {
		chart: {
			schemeType: 'ordinal',
			view: {
				def: {width: 1024, height: 360},
				min: {height: 360},
				max: {height: 360}
			},
			xAxis: {
				show: true,
				showLabel: true,
				minInterval: 1,
				defaultHeight: 20
			},
			yAxis: {
				show: true,
				showLabel: true,
				defaultWidth: 150,
				maxLength: 24,
			},
			valueFormatting: Utils.formatValue,
			showGridLines: true,
			gradient: false,
			colorScheme: {
				domain: Consts.colors.single
			}
		},
		select: (event) => {
			// this.router.navigate(['/company/' + event.id]);
		},
		onLegendLabelClick: (event) => {
		},
		data: null
	};

	graph = this.histogram_distribution;

	benchmark_groups = [];
	active = {
		benchmark_group: null,
		benchmark: null
	};
	marker: {
		group: string;
		name: string;
		value: number;
		toolTipFormat: (mark) => string;
	} = {
		group: null,
		name: null,
		value: null,
		toolTipFormat: (mark) => {
			return 'Current Tender: ' + Utils.formatValue(mark.value);
		}
	};

	constructor() {
		this.benchmark_groups = [];
		this.benchmark_groups.push({
			name: 'Overall', benchmarks: [
				{name: 'Good Procurement Score', id: 'TENDER'}
			]
		});
		Object.keys(Consts.indicators).forEach(i_key => {
			let indicator = Consts.indicators[i_key];
			let group = {name: indicator.plural, benchmarks: [{name: indicator.name + ' Score', id: i_key}]};
			Object.keys(indicator.subindicators).forEach(key => {
				if (!indicator.subindicators[key].notused) {
					group.benchmarks.push({name: Utils.formatIndicatorName(key), id: key});
				}
			});
			this.benchmark_groups.push(group);
		});
		this.active.benchmark_group = this.benchmark_groups[0];
		this.handleGroupChange();
	}


	getSeriesInfo() {
		return {data: this.graph.data, multi: true, header: {name: this.graph.chart.xAxis.label, value: this.graph.chart.yAxis.label}, filename: 'benchmark'};
	}

	getBucket(value: number): number {
		let offset = 0;
		let interval = 5;
		return Math.floor((value - offset) / interval) * interval + offset;
	}

	displayBenchmark(benchmark): void {
		this.graph.data = null;
		this.marker.group = null;
		this.marker.name = null;
		this.marker.value = null;
		if (benchmark && this.data) {
			if (this.highlight) {
				this.marker.group = this.highlight.year;
				if (this.highlight.values && this.highlight.values.hasOwnProperty(benchmark.id)) {
					this.marker.value = this.highlight.values[benchmark.id];
					this.marker.name = this.getBucket(this.marker.value).toString();
				}
			}
			this.graph.chart.xAxis.label = benchmark.name;
			let o = this.data[benchmark.id];
			if (!o) {
				this.graph.data = [];
				return;
			}
			let d = {};
			Object.keys(o).forEach(year => {
				let yd = o[year];
				for (let val = 0; val <= 100; val += 5) {
					d[val] = d[val] || {name: val.toString(), series: []};
					d[val].series.push({name: year, value: yd[val] || 0});
				}
			});
			this.graph.data = Object.keys(d).map(key => d[key]);
		}
	}

	handleGroupChange(): void {
		this.active.benchmark = null;
		if (this.active.benchmark_group) {
			this.active.benchmark = this.active.benchmark_group.benchmarks[0];
		}
		this.handleBenchmarkChange();
	}

	handleFilterChange(): void {
		this.filtersChange.emit({});
	}

	handleBenchmarkChange(): void {
		this.displayBenchmark(this.active.benchmark);
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.handleBenchmarkChange();
	}

}