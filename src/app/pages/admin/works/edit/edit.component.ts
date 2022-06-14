import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iworks } from 'src/app/models/work';
import { WorksService } from 'src/app/service/works.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any = this.activateRoute.snapshot.paramMap.get('id')
  getWork!:Iworks
  onSubmit() {
    this.worksService.edit(this.getWork).subscribe(() => {
      alert(" thanh cong");
      this.router.navigateByUrl("/admin/works")
    })
  }
  constructor(
    private router:Router,
    private activateRoute: ActivatedRoute,
    private worksService: WorksService
  ) { }

  ngOnInit(): void {
    this.worksService.getbyId(this.id).subscribe(work=>{this.getWork=work})

  }

}
