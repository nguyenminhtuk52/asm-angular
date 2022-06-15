import { Component, OnInit } from '@angular/core';
import { Iworks } from 'src/app/models/work';
import { BlogsService } from 'src/app/service/blogs.service';
import { WorksService } from 'src/app/service/works.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listWorks?: Iworks[];
  listBlogs?: Iworks[];
  constructor(
    private worksService: WorksService,
    private blogsService: BlogsService
  ) { }
  ngOnInit(): void {
    this.worksService.getAll().subscribe((list) => {
      this.listWorks = list
    }),
    this.blogsService.getAll().subscribe((listblog) => {
      this.listBlogs = listblog
    })
  }

}
