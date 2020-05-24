import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../core/auth.service";
import { PostService } from "../post.service";
import { Post } from "../post";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs/Observable";
import * as firebase from "firebase/app";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
  Post_data: any;

  uploadPercent: Observable<number>;
  downloadURL: string = null;
  image_relative_path: string = null;
  image_loaded: any = null;
  submissionInProcess: boolean = false;

  public postContent = {
    editorData: '<p>Write your post here.</p>'
  };

  constructor(
    private auth: AuthService,
    private postService: PostService,
    private storage: AngularFireStorage
  ) {
    this.Post_data = new Post();
  }

  ngOnInit(): void {
  }

  userAuthenticated() {
    return this.auth.authenticated;
  }
  createPost() {
    this.submissionInProcess = true;
    // Image upload
    const task = this.storage.upload(this.image_relative_path, this.image_loaded).then(() => {
      this.storage.ref(this.image_relative_path).getDownloadURL().subscribe(function(url) {
        this.Post_data.author = this.auth.authState.displayName;
        this.Post_data.authorId = this.auth.authState.email;
        this.Post_data.published = new Date;
        this.Post_data.thumbnail = url;
        this.postService.create({
          author: this.Post_data.author,
          authorId: this.Post_data.authorId,
          thumbnail: this.Post_data.thumbnail,
          title: this.Post_data.title,
          subtitle: this.Post_data.subtitle,
          short_desc: this.Post_data.short_desc,
          published: this.Post_data.published,
          content: this.Post_data.content
        });
        this.Post_data = new Post();
        this.image_loaded = null;
        this.image_relative_path = null;
        this.submissionInProcess = false;
      }.bind(this));
    });
  }

  uploadImage(event) {
    const file = event.target.files[0]
    const path = `${environment.firebase.storagePath}/${file.name}`
    if (file.type.split('/')[0] != 'image') {
      return alert('Only image file is required')
    } else {
      this.image_relative_path = path;
      this.image_loaded = file;
    }
  }
}
