import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from "app/_models/user.model";

@Injectable()
export class DatabaseService {
    orderByChildSubject: Subject<any>;

    constructor(
        private db: AngularFireDatabase)
    { }

    getUsers(): FirebaseListObservable<User[]> {
        this.orderByChildSubject = new BehaviorSubject('first_name');

        return this.db.list('/users', {
            query: {
                limitToFirst: 5,
                orderByChild: this.orderByChildSubject
            }
        });
    }

    filterBy(gender: string) {
        this.orderByChildSubject.next(gender);
    }
}
