import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './component/websitelayout/header/header.component';
import { FooterComponent } from './component/websitelayout/footer/footer.component';
import { BlogComponent } from './pages/blog/blog.component';
import { WorksComponent } from './pages/works/works.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ListComponent } from './pages/admin/works/list/list.component';
import { AddComponent } from './pages/admin/works/add/add.component';
import { EditComponent } from './pages/admin/works/edit/edit.component';
import { HeaderadminComponent } from './component/adminlayout/headeradmin/headeradmin.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ListblogComponent } from './pages/admin/blog/listblog/listblog.component';
import { AddblogComponent } from './pages/admin/blog/addblog/addblog.component';
import { EditblogComponent } from './pages/admin/blog/editblog/editblog.component';
import { BlogsBlogsdeltailComponent } from './pages/blogs-blogsdeltail/blogs-blogsdeltail.component';
import { WorksDetailComponent } from './pages/works-detail/works-detail.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    WorksComponent,
    DashboardComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    HeaderadminComponent,
    LayoutComponent,
    ListblogComponent,
    AddblogComponent,
    EditblogComponent,
    BlogsBlogsdeltailComponent,
    WorksDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
