import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/admin/works/add/add.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { EditComponent } from './pages/admin/works/edit/edit.component';
import { ListComponent } from './pages/admin/works/list/list.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { WorksComponent } from './pages/works/works.component';
import { ListblogComponent } from './pages/admin/blog/listblog/listblog.component';
import { AddblogComponent } from './pages/admin/blog/addblog/addblog.component';
import { EditblogComponent } from './pages/admin/blog/editblog/editblog.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'works', component: WorksComponent }
    ]
  },

  {
    path: 'admin', component: DashboardComponent, children: [
      { path: 'works', component: ListComponent },
      { path: 'works/add', component: AddComponent },
      { path: 'works:id/edit', component: EditComponent },

      {
        path: 'blogs', component: ListblogComponent
      },
      { path: 'blogs/add', component: AddblogComponent },
      { path: 'blogs/:id/edit', component: EditblogComponent }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
