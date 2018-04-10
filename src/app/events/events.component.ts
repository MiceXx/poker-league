import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Event {
  title: string;
  date: Date;
  location: string;
  description: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {

  eventsCol: AngularFirestoreCollection<Event>;
  events: Observable<Event[]>;

  date = new Date();

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.eventsCol = this.afs.collection('events', ref => ref.orderBy('date', 'asc'));
    this.events = this.eventsCol.valueChanges();
  }

  getMap = function(event) {
    return 'https://maps.google.com/?q=' + event.location;
  };

}
