import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any[];
  
  constructor(private service:PostsService) {
    
   }
   createPost(inputTitle: HTMLInputElement){
     let post = { title : inputTitle.value };
     this.posts.splice(0,0,post);

     inputTitle.value='';
     this.service.create(post)
      .subscribe(newPost=>{
        post['id']= newPost.id;
        console.log(newPost);
      },(error:AppError)=>{
        this.posts.splice(0,1)

        if(error instanceof BadInput){
          //this.form.setErrors(error.json());
         // this.form.setErrors(error.originalError);
        }
        else throw error;
      });
  }
  updatePost(post){
    this.service.update(post)
    //this.http.put(this.url,JSON.stringify(post))
    .subscribe(updatedPost=>{
      console.log(updatedPost);
    });
  }
  deletePost(post){
    let index= this.posts.indexOf(post);
    this.posts.splice(index,1);

    this.service.delete(post.id)
    .subscribe(
      null,
    (error: AppError) => {
      this.posts.splice(index,0,post);
      
      if(error instanceof NotFoundError){
        alert('This post has already been deleted.')
      }
      else throw error;
    });
  }
  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }
  
}
