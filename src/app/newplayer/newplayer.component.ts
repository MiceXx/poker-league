import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-newplayer',
  templateUrl: './newplayer.component.html',
  styleUrls: ['./newplayer.component.scss']
})
export class NewplayerComponent implements OnInit {

  constructor(private playerData: DataService) {
  }

  getPost() {
  }

  ngOnInit() {
  }
}
