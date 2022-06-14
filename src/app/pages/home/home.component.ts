import { Component, OnInit } from '@angular/core';
import { Iworks } from 'src/app/models/work';
import { WorksService } from 'src/app/service/works.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
