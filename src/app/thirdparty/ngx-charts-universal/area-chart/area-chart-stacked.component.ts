import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, ElementRef} from '@angular/core';
import {BaseAreaChartComponent, IAreaChartData} from './base-area-chart.component';
import {IChartAreaSettings, IChartData, IScaleType} from '../chart.interface';
import {IDomain} from '../common/common.interface';
import {PlatformService} from '../../../services/platform.service';

@Component({
	selector: 'ngx-charts-area-chart-stacked',
	template: `
    <ngx-charts-chart
      [dim]="dim" [chart]="chart" [data]="data"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
	  [clickable]="clickable"
	  (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)">
      <svg:defs>
        <svg:clipPath [attr.id]="clipId.id">
          <svg:rect
            [attr.width]="viewDim.width + 10"
            [attr.height]="viewDim.height + 10"
            [attr.transform]="'translate(-5, -5)'"/>
        </svg:clipPath>
      </svg:defs>
      <svg:g [attr.transform]="transform" class="area-chart chart">
        <svg:g ngx-charts-x-axis
          *ngIf="chart.xAxis.show"
          [xScale]="xScale"
          [dims]="viewDim"
          [showGridLines]="chart.showGridLines"
          [showLabel]="chart.xAxis.showLabel"
          [labelText]="chart.xAxis.label"
          (dimensionsChanged)="updateXAxisHeight($event)">
        </svg:g>
        <svg:g ngx-charts-y-axis
          *ngIf="chart.yAxis.show"
          [yScale]="yScale"
          [dims]="viewDim"
          [showGridLines]="chart.showGridLines"
		  [autoSize]="chart.yAxis.autoSize"
		  [showLabel]="chart.yAxis.showLabel"
          [labelText]="chart.yAxis.label"
          (dimensionsChanged)="updateYAxisWidth($event)">
        </svg:g>
        <svg:g [attr.clip-path]="clipId.url">
          <svg:g *ngFor="let series of areaData; trackBy:trackBy">
            <svg:g ngx-charts-area-series
              [xScale]="xScale"
              [yScale]="yScale"
              [colors]="colors"
              [data]="series"
              [scaleType]="scaleType"
              [gradient]="chart.gradient"
              [activeEntries]="activeEntries"
              [curve]="curve"
              stacked="true"
            />
          </svg:g>
          <svg:g ngx-charts-area-tooltip
            [xSet]="xSet"
            [xScale]="xScale"
            [yScale]="yScale"
            [results]="areaData"
            [height]="viewDim.height"
            [colors]="colors"
            (hover)="updateHoveredVertical($event)"
          />
          <svg:g *ngFor="let series of areaData; trackBy:trackBy">
            <svg:g ngx-charts-circle-series
              type="stacked"
              [xScale]="xScale"
              [yScale]="yScale"
              [colors]="colors"
              [activeEntries]="activeEntries"
              [data]="series"
              [scaleType]="scaleType"
              [visibleValue]="hoveredVertical"
              (select)="onClick($event, series)"
              (activate)="onActivate($event)"
              (deactivate)="onDeactivate($event)"
            />
          </svg:g>
        </svg:g>
      </svg:g>
      <svg:g ngx-charts-timeline
        *ngIf="data && isTime()"
        [attr.transform]="timelineTransform"
        [results]="areaData"
        [view]="[timelineWidth, height]"
        [height]="timelineHeight"
        [scheme]="scheme"
        [legend]="legend"
        [scaleType]="scaleType"
        (onDomainChange)="updateDomain($event)">
        <svg:g *ngFor="let series of areaData; trackBy:trackBy">
          <svg:g ngx-charts-area-series
            [xScale]="timelineXScale"
            [yScale]="timelineYScale"
            [colors]="colors"
            [data]="series"
            [scaleType]="scaleType"
            [gradient]="gradient"
            stacked="true"
            [curve]="curve"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaChartStackedComponent extends BaseAreaChartComponent {
	@Input() chart: IChartAreaSettings;
	@Input() data: Array<IChartData>;
	@Input() curve;
	@Input() activeEntries: any[];
	@Output() select: EventEmitter<any>;
	@Output() activate: EventEmitter<any>;
	@Output() deactivate: EventEmitter<any>;


	constructor(protected chartElement: ElementRef, protected zone: NgZone, protected cd: ChangeDetectorRef, protected platform: PlatformService) {
		super(chartElement, zone, cd, platform);
	}

	updateSet(): Array<IAreaChartData> {
		let result = this.cloneAreaData();
		for (let i = 0; i < this.xSet.length; i++) {
			let val = this.xSet[i];
			let d0 = 0;
			for (let group of result) {

				let d = group.series.find(item => {
					let a = item.name;
					let b = val;
					if (this.scaleType === IScaleType.Time) {
						return a.valueOf() === b.valueOf();
					}
					return a === b;
				});

				if (d) {
					d.d0 = d0;
					d.d1 = d0 + d.value;
					d0 += d.value;
				} else {
					d = {
						name: val,
						value: 0,
						d0: d0,
						d1: d0
					};
					group.series.push(d);
				}
			}
		}
		return result;
	}

	getYDomain(): IDomain {
		let domain = [];
		for (let i = 0; i < this.xSet.length; i++) {
			let val = this.xSet[i];
			let sum = 0;
			for (let group of this.data) {
				let d = group.series.find(item => {
					let a = item.name;
					let b = val;
					if (this.scaleType === IScaleType.Time) {
						return a.valueOf() === b.valueOf();
					}
					return a === b;
				});

				if (d) {
					sum += d.value;
				}
			}

			domain.push(sum);
		}

		let min = Math.min(0, ...domain);
		let max = Math.max(...domain);
		return [min, max];
	}

	isTime(): boolean {
		return this.scaleType === IScaleType.Time;
	}
}
