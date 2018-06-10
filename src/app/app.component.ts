import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableDataSource } from './table-datasource';

@Component({
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @Input() data;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    let inputData;
    try {
      inputData = JSON.parse(this.data);
    } catch {
      inputData = this.data;
    }
    this.dataSource = new TableDataSource(this.paginator, this.sort, inputData);
  }
}
