import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'success-dialog',
  templateUrl: './dialogs/success-dialog.html',
})

export class SuccessDialog {}

//-----------------------------------------------

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {	
	
	constructor(private postService:PostService, public dialog: MatDialog) {}
	
	baseURL = 'https://work-samples.swishersolutions.com/';
	apiURL = 'https://work-samples.swishersolutions.com/api/';
	
	title = 'Angular Demo';	
	
	// Set the intial number of columns in the grid
	gridColumns = 4;
	
	// Lets 'em swap between 3 posts per row or 4
	toggleGridColumns() {
		this.gridColumns = this.gridColumns === 3 ? 4 : 3;
	}  
	
	// Deafualt to images of Siwsher
	imageSource = 'Swisher';
	
	posts;
	
	// Let 'em swap between images of Swisher and images of Superheroes
	toggleImageSource() {
		this.imageSource = this.imageSource === 'Swisher' ? 'Heroes' : 'Swisher';
		this.postService.getPosts(this.imageSource)
		.subscribe(response => {
			this.posts = response;
		});
	}
		
	
	castVote() {		
		this.postService.postValues(this.posts, this.imageSource).subscribe(response => {
			if (response == 'success') {						
				let dialogRef = this.dialog.open(SuccessDialog);			
			}
		});			
	}
	
	
	// Get the JSON
	ngOnInit() {
		this.postService.getPosts(this.imageSource)
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
	
	gohome() {
		window.location.href = this.baseURL;
	}
	
	showAPILog() {
		window.open (this.apiURL + "log.php");
	}
	
	swapLeft(i) {
		this.posts = this.move(this.posts, i, i-1)
		
	}
	
	swapRight(i) {
		this.posts = this.move(this.posts, i+1, i)
	}
	
	move(array, from, to) {
		if( to === from ) return array;
		
		if (to < 0) {
			return array;
		};
		
		if (from > (array.length - 1)) {
			return array;
		};
		
		var target = array[from];                         
		var increment = to < from ? -1 : 1;

		for(var k = from; k != to; k += increment){
			array[k] = array[k + increment];
		}
		array[to] = target;
		
		array = array.slice();
		
		return array;
	}
		
}
