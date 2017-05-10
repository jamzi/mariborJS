import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from "app/_models/user.model";

@Injectable()
export class DatabaseService {
    orderByChildSubject: Subject<any>;
    users: FirebaseListObservable<User[]>;

    constructor(
        private db: AngularFireDatabase)
    { }

    getUsers(): FirebaseListObservable<User[]> {
        this.orderByChildSubject = new BehaviorSubject('first_name');

        this.users = this.db.list('/users', {
            query: {
                limitToFirst: 5,
                orderByChild: this.orderByChildSubject
            }
        });
        return this.users;
    }

    updateUser(user) {
        return Observable.create(observer => {
            this.users.update(user.$key, user)
                .then((authData) => {
                    observer.next(authData);
                }).catch((error) => {
                    observer.error(error);
                });
        });

    }

    filterBy(gender: string) {
        this.orderByChildSubject.next(gender);
    }
}
