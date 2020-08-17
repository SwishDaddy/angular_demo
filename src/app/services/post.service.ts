import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
	
	public apiURL = 'https://work-samples.swishersolutions.com/api/api.php';	
	
	constructor(private httpClient: HttpClient) { }

	getPosts(f){  
		return this.httpClient.get(this.apiURL + '?f=' + f);
	}

	postValues(obj, rtype){

		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/x-www-form-urlencoded',
			})
		};		
		
		let postobj = 'json=' + JSON.stringify(obj) + '&rtype=' + rtype;
		
		return this.httpClient.post(this.apiURL, postobj, httpOptions);
	}
  
}
