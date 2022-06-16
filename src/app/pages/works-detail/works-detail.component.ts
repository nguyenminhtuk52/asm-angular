import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iworks } from 'src/app/models/work';
import { WorksService } from 'src/app/service/works.service';

@Component({
  selector: 'app-works-detail',
  templateUrl: './works-detail.component.html',
  styleUrls: ['./works-detail.component.css']
})
export class WorksDetailComponent implements OnInit {

  id: any = this.activateRoute.snapshot.paramMap.get('id')
  getWork!: Iworks
  constructor(
    private activateRoute: ActivatedRoute,
    private worksService:WorksService
  ) {}
  ngOnInit(): void {
    this.worksService.getbyId(this.id).subscribe(work => { this.getWork = work })

  }

}
