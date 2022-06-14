import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iworks } from 'src/app/models/work';
import { WorksService } from 'src/app/service/works.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  listWorks?: Iworks[];
  constructor(
    private worksService: WorksService
  ) { }
  ngOnInit(): void {
    this.worksService.getAll().subscribe((list) => {
      this.listWorks = list
      console.log(list);

    })
  }
}
