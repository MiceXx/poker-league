import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Event {
  title: string;
  date: Date;
  location: string;
  description: string;
}

interface EventId extends Event {
  id: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  players: any;

  title: string;
  date: Date;
  location: string;
  description: string;

  eventsCol: AngularFirestoreCollection<Event>;
  events: any;
  eventDoc: AngularFirestoreDocument<Event>;
  event: Observable<Event>;

  constructor(private data: DataService, private afs: AngularFirestore) { }

  ngOnInit() {
    this.players = this.data.getAllPlayers();

    this.eventsCol = this.afs.collection('events');
    this.events = this.eventsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Event;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
  }

  addEvent() {
    this.afs.collection('events').add({
      'title': this.title,
      'date': this.date,
      'location': this.location,
      'descrtiption': this.description
    });
  }

  getEvent(eventId) {
    this.eventDoc = this.afs.doc('events/' + eventId);
    this.event = this.eventDoc.valueChanges();
  }

  deleteEvent(eventId) {
    this.afs.doc('events/' + eventId).delete();
  }

}
