import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  rForm: FormGroup;
  post: any;

  name: string = '';
  cplNumber: string = '';
  email: string = '';
  comments: string = '';
  dealer: boolean = false;

  constructor(private fb: FormBuilder,
    private playerData: DataService) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'cplNumber': [null, Validators.compose([
        Validators.required, Validators.minLength(6), Validators.maxLength(6)])],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'comments': [null, Validators.maxLength(200)],
      'dealer': null,
      'terms': [null, Validators.requiredTrue],
    });
  }

  addPost(post) {
    this.name = post.name;
    this.cplNumber = post.cplNumber;
    this.email = post.email;
    this.comments = post.comments;
    this.dealer = post.dealer || false;
    this.playerData.addPlayer(this.name, this.email, this.cplNumber, this.dealer);
  }

  ngOnInit() {

  }

}
