import { Component, OnInit } from '@angular/core';
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
    })
  }
  constructor(
    private worksService: WorksService
  ) { }

  ngOnInit(): void {
  }

}
