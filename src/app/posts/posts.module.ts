import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { PostService } from "./post.service";
import { RouterModule, Routes } from '@angular/router';
import { CKEditorModule } from 'ckeditor4-angular';

const routes: Routes = [
  {path: 'blog', component: PostListComponent},
  {path: 'blog/:id', component: PostDetailComponent},
  {path: 'dashboard', component: PostDashboardComponent}
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CKEditorModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PostDashboardComponent, PostDetailComponent, PostListComponent],
  providers: [PostService]
})
export class PostsModule { }
