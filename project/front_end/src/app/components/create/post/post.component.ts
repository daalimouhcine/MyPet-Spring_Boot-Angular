import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrentPerson } from 'src/app/core/interfaces/Person';
import { Alert } from 'src/app/core/interfaces/alert';
import { Animal } from 'src/app/core/interfaces/animal';
import { AuthService } from 'src/app/core/services/auth.service';
import { CONSTANTS } from 'src/app/shared/components/constantes';




@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  animals: Animal[] = [];
  alertStyle: Alert = new Alert();
  messageAlert: string = '';
  loading: boolean = false;
  openModal: boolean = false;
  currentPerson: CurrentPerson | undefined | null = null;
  myAnimals: Animal[] = [];


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.authService.accessToken,
    }),
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    if (!this.authService.accessToken) this.router.navigate(['/']);
    this.currentPerson = this.authService.getPersonFromLocalStorage();
    this.getMyAnimals();
    this.addPostForm.patchValue({
      referencePerson: this.currentPerson?.referencePerson,
    });
  }
  getMyAnimals() {
    this.http
      .get(
        CONSTANTS.urls.getMyAnimals + this.currentPerson?.referencePerson)
      .subscribe((response: any) => {
        console.log(response);
        this.myAnimals = response;
      });
  }

  toggleModal() {
    this.openModal = !this.openModal;
  }

  cancelPostForm() {
    this.toggleModal();
  }

  submitAddPostForm(): void {
  }

  addPostForm: FormGroup = new FormGroup({
    referenceAnimal: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(500)]),
    days: new FormControl('', [Validators.required, Validators.min(1), Validators.max(30)]),

  });

  get title() {
    return this.addPostForm.get('title');
  }

  get description() {
    return this.addPostForm.get('description');
  }

  get days() {
    return this.addPostForm.get('days');
  }

  get referenceAnimal() {
    return this.addPostForm.get('referenceAnimal');
  }
  
}
