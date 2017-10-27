import {Component, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {ITableColumn} from '../../app.interfaces';

@Component({
	moduleId: __filename,
	selector: 'select-columns',
	templateUrl: 'select-columns.component.html'
})
export class SelectColumnsComponent implements OnChanges {
	@Input()
	columns_all: Array<ITableColumn>;
	@Input()
	columns_active: Array<ITableColumn>;
	groups: Array<{name: string; columns: Array<{active: boolean;column: ITableColumn;}>;}> = [];
	@Output()
	selectChange = new EventEmitter();

	update(column, active): void {
		if (active) {
			this.selectChange.emit({value: this.columns_active.concat(column)});
		} else {
			this.selectChange.emit({
				value: this.columns_active.filter(c => {
					return c !== column;
				})
			});
		}
	}

	public ngOnChanges(changes: SimpleChanges): void {
		if (!this.columns_all || !this.columns_active) {
			return;
		}
		let groups = {};
		this.columns_all.forEach(column => {
			let groupname = column.group || '_';
			groups[groupname] = groups[groupname] || {name: groupname, columns: []};
			groups[groupname].columns.push({
				active: this.columns_active.indexOf(column) >= 0,
				column: column
			});
		});
		this.groups = Object.keys(groups).sort().map(key => groups[key]);
	}

}
