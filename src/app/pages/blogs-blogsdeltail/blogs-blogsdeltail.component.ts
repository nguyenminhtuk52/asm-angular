import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iworks } from 'src/app/models/work';
import { BlogsService } from 'src/app/service/blogs.service';

@Component({
  selector: 'app-blogs-blogsdeltail',
  templateUrl: './blogs-blogsdeltail.component.html',
  styleUrls: ['./blogs-blogsdeltail.component.css']
})
export class BlogsBlogsdeltailComponent implements OnInit {
  id: any = this.activateRoute.snapshot.paramMap.get('id')
  getWork!: Iworks
  constructor(
    private activateRoute: ActivatedRoute,
    private blogsService: BlogsService
  ) { }
  ngOnInit(): void {
    this.blogsService.getbyId(this.id).subscribe(work => { this.getWork = work })

  }
}
