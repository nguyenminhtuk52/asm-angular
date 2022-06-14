import { Component, OnInit } from '@angular/core';
import { Iworks } from 'src/app/models/work';
import { WorksService } from 'src/app/service/works.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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
  onRemove(id: number) {
    this.listWorks = this.listWorks?.filter(item => item.id !== id)
    this.worksService.remove(id).subscribe(() => {

    })
  }
}
