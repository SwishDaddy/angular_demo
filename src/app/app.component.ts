import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import {CdkDragDrop, moveItemInArray, CdkDragEnter} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {	
	
	constructor(private service:PostService) {}
	
	apiURL = 'https://www.swishersolutions.com/demos/api/';
	
	title = 'Angular Demo';	
	
	// Set the intial number of columns in the grid
	gridColumns = 4;
	
	// Lets 'em swap between 3 posts per row or 4
	toggleGridColumns() {
		this.gridColumns = this.gridColumns === 3 ? 4 : 3;
	}  
	
	// Deafualt to images of Siwsher
	imageSource = 'Swisher';
	
	// Let 'em swap between images of Swisher and images of Superheroes
	toggleImageSource() {
		this.imageSource = this.imageSource === 'Swisher' ? 'Heroes' : 'Swisher';
		this.service.getPosts(this.imageSource)
		.subscribe(response => {
			this.posts = response;
		});
	}
		
	// These will be the posts that we show... ultimately a JSON array from the server API
	posts;  
	
	// Get the JSON
	ngOnInit() {
		this.service.getPosts(this.imageSource)
		.subscribe(response => {
			this.posts = response;
		});
	}

	// Shows the image in a new window.. .for the "VIEW" buttons
	showImage(filename: string) { 
		window.open (this.apiURL + "img/" + filename);
	}
	
	openGitHub() {
		window.open ("https://github.com/SwishDaddy/angular_demo");
	}
	
	showAPILog() {
		window.open (this.apiURL + "log.php");
	}
	
	
}
