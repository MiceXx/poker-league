import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  contactList = [
    {
    name: 'Michael Lefrank',
    title: 'Tournament Director',
    phone: '289-800-1427',
    email: 'Toronto@CanadianPokerLeague.com',
    image: 'michael-lefrank.jpg',},
  ];

  constructor() { }

  ngOnInit() {
  }

}
