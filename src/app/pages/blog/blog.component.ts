import { Component, OnInit } from '@angular/core';
import { Iworks } from 'src/app/models/work';
import { BlogsService } from 'src/app/service/blogs.service';
import { WorksService } from 'src/app/service/works.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
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
}
