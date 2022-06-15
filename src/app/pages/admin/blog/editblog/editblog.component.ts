import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iworks } from 'src/app/models/work';
import { BlogsService } from 'src/app/service/blogs.service';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {

  id:any = this.activateRoute.snapshot.paramMap.get('id')
  getWork!:Iworks
  onSubmit() {
    this.blogsService.edit(this.getWork).subscribe(() => {
      alert(" thanh cong");
      this.router.navigateByUrl("/admin/blogs")
    })
  }
  constructor(
    private router:Router,
    private activateRoute: ActivatedRoute,
    private blogsService: BlogsService
  ) { }

  ngOnInit(): void {
    this.blogsService.getbyId(this.id).subscribe(work=>{this.getWork=work})
  }

}
