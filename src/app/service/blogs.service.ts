import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iworks } from '../models/work';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {


  constructor(
    private http: HttpClient
  ) { }
  create(data: any) {
    return this.http.post("http://localhost:3000/blogs", data);
  }
  getAll():Observable<Iworks[]> {
    return this.http.get<Iworks[]>("http://localhost:3000/blogs");
  }
  remove(id:number):Observable<Iworks>{
    return this.http.delete<Iworks>("http://localhost:3000/blogs/"+id)
  }
  edit(data:Iworks):Observable<Iworks>{
    return this.http.put<Iworks>("http://localhost:3000/blogs/"+data.id,data)
  }
  getbyId(id:number){
    return this.http.get<Iworks>("http://localhost:3000/blogs/"+id)
  }
}
