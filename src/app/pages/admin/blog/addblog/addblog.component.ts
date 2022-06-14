import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/service/blogs.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

  work: any = {
    name: "",
    image:"",
    date:"",
    framworks:"",
    description:""
  }
  onSubmit(){
    console.log(this.work);
    this.blogService.create(this.work).subscribe(()=>{
      alert("Them thanh cong");
    })
  }
  constructor(
    private blogService: BlogsService
  ) { }

  ngOnInit(): void {
  }

}
