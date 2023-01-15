import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentPerson } from 'src/app/core/interfaces/Person';
import { Post } from 'src/app/core/interfaces/post';
import { AuthService } from 'src/app/core/services/auth.service';
import { CONSTANTS } from 'src/app/shared/components/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  openedComment: boolean = false;
  handleOpenedComment(openedComment: boolean) {
    this.openedComment = openedComment;
  }
  
  allPosts: Post[] = [];
  currentPerson: CurrentPerson = new CurrentPerson();

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.getAllPosts();
    if(this.authService.getPersonFromLocalStorage() != null && this.authService.getPersonFromLocalStorage() != undefined) {
      this.currentPerson = this.authService.getPersonFromLocalStorage();
    }
  }

  adopt(referencePost: string) { 
    if(this.authService.currentPerson == null || this.authService.currentPerson == undefined || this.authService.accessToken == null || this.authService.accessToken == undefined || this.authService.accessToken == "") {
      this.router.navigate(['/login']);
    } else {
      console.log("adopt");
    }
  }

  getAllPosts() {
    this.http.get(CONSTANTS.urls.getAllPosts).subscribe((response: any) => {
      console.log(response);
      this.allPosts = response;
    });
  }
}
