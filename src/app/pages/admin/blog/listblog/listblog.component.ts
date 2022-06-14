import { Component, OnInit } from '@angular/core';
import { Iworks } from 'src/app/models/work';
import { BlogsService } from 'src/app/service/blogs.service';
import { WorksService } from 'src/app/service/works.service';

@Component({
  selector: 'app-listblog',
  templateUrl: './listblog.component.html',
  styleUrls: ['./listblog.component.css']
})
export class ListblogComponent implements OnInit {
  listWorks?: Iworks[];
  constructor(
    private blogsService:BlogsService
  ) { }
  ngOnInit(): void {
    this.blogsService.getAll().subscribe((list) => {
      this.listWorks = list
      console.log(list);

    })
  }
  onRemove(id: number) {
    this.listWorks = this.listWorks?.filter(item => item.id !== id)
    this.blogsService.remove(id).subscribe(() => {
    })
  }
}
