import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError,map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url:string, private http:Http) { }

  getAll(code?:string){
  if(code){
   return this.http.get(this.url+'/'+code)
   .pipe(
        map(response=>response.json()),
        catchError(this.HandleError)
   );
  }
  else{
      return this.http.get(this.url)
      .pipe(
           map(response=>response.json()),
           catchError(this.HandleError)
      );
  }
}
  create(resource){
    //return this.http.post(this.url,JSON.stringify(resource))
    return this.http.post(this.url,resource)
    .pipe(
        map(response=>response.json()),
        catchError(this.HandleError)
        );
  }
  update(resource){
   // return this.http.patch(this.url+'/'+resource.id,JSON.stringify({isRead:true}))
   //return this.http.patch(this.url+'/Id/'+resource.code,JSON.stringify(resource))
    return this.http.patch(this.url+'/Id/'+resource.code,resource)
    .pipe( 
        map(response=>response.json()),
        catchError(this.HandleError)
        );
  }
  updatePut(resource){
    // return this.http.patch(this.url+'/'+resource.id,JSON.stringify({isRead:true}))
     return this.http.put(this.url+'/Id/'+resource.code,resource)
     .pipe( 
         map(response=>response.json()),
         catchError(this.HandleError)
         );
   }
  delete(id){
    return  this.http.delete(this.url+'/'+id)
    .pipe( 
        map(response=>response.json()),
        catchError(this.HandleError)
        );
  }
  private HandleError(err:Response){
    if(err.status===404){
      return Observable.throw(new NotFoundError());
    }
    if(err.status===400){
      return Observable.throw(new BadInput(err.json()));
    }
    return Observable.throw(new AppError(err));
  }
}
