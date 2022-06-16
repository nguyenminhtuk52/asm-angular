import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WorksService } from 'src/app/service/works.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  work: any = {
    name: "",
    image:"",
    date:"",
    framworks:"",
    description:""
  }
  onSubmit(){
    console.log(this.work);
    this.worksService.create(this.work).subscribe(()=>{
      alert("Them thanh cong");
      this.router.navigateByUrl("admin/works")
    })
  }
  constructor(
    private worksService: WorksService,
    private router:Router,
    private fb :FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
