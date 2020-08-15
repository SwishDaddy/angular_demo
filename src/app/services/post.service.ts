import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
	
public url = 'https://www.swishersolutions.com/demos/api/api.php?f=';
    
  constructor(private httpClient: HttpClient) { }
  
  getPosts(f){  
    return this.httpClient.get(this.url + f);

  }
  
  create(post){
    return this.httpClient.post(this.url, JSON.stringify(post));
  }
  
}
