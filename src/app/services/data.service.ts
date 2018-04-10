import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Player {
  name: string;
  email: string;
  cplnumber: string;
  dealer: boolean;
}

interface PlayerId extends Player {
  id: string;
}

@Injectable()
export class DataService {

  playersCol: AngularFirestoreCollection<Player>;
  players: any;
  playerDoc: AngularFirestoreDocument<Player>;
  player: Observable<Player>;

  constructor(private afs: AngularFirestore) {
    this.playersCol = this.afs.collection('players');
    this.players = this.playersCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Player;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
  }

  addPlayer(name, email, cplnumber, dealer) {
    this.afs.collection('players').doc(cplnumber).set({
      'name': name,
      'email': email,
      'cplnumber': cplnumber,
      'dealer': dealer,
    });
  }

  getPlayer(playerId) {
    this.playerDoc = this.afs.doc('players/' + playerId);
    return this.playerDoc.valueChanges();
  }

  getAllPlayers() {
    this.playersCol = this.afs.collection('players');
    return this.playersCol.valueChanges();
  }

  deletePlayer(playerId) {
    this.afs.doc('players/' + playerId).delete();
  }

  getDealers() {
    return this.afs.collection('players', ref => ref.where('dealer', '==', 'true'));
  }

}
