import { Component, OnInit }       from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from "rxjs";

import { Server } from '../model/server';
import { Filter, ram, hdd, locations } from '../model/serverFilterForm';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  providers: [ServerService],
  styleUrls: ['./servers.component.scss']
})

export class ServersComponent implements OnInit {
  
  displayedColumns = ['model', 'ram', 'hdd', 'location', 'price'];
  filter: Filter;
  filterForm: FormGroup;
  ramOptions = ram;
  hddOptions = hdd;
  locations = locations;
  dataSource: ServerDataSource;

  constructor(
    private fb: FormBuilder,
    private serverService: ServerService) {

    this.createForm();
  }
  
  ngOnInit() {
    this.dataSource = new ServerDataSource(this.serverService);

    this.dataSource.loadServerList(this.filter);
  }

  createForm() {
    this.filterForm = this.fb.group({
      storageMin: '',
      storageMax: '',
      ram: '',
      hdd: '',
      location: ''
    });
  }

  onSubmit() {
    this.updateDataSource();
  }

  updateDataSource() {
    this.dataSource.loadServerList(this.filterForm.value);
  }
}

export class ServerDataSource extends DataSource<any> {
  private serverList = new BehaviorSubject<Server[]>([]);

  constructor(
    private serverService: ServerService
  ) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<Server[]> {
    return this.serverList.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer) {
    this.serverList.complete();
  }

  loadServerList(param) {
    this.serverService.getServers(param).pipe()
      .subscribe(servers => this.serverList.next(servers));
  }

}
