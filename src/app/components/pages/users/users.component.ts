import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Users } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor(private http: HttpClient) {}
  users: Users[] = [];
  ngOnInit() {
    this.fetchUsers();
  }
  // private fetchUsers() {
  //   this.http
  //     .get('https://fivepmbatch-80453-default-rtdb.firebaseio.com/users.json')
  //     .pipe(
  //       map((responseData: any) => {
  //         const usersArray = [];
  //         for (const key in responseData) {
  //           if (responseData.hasOwnProperty(key)) {
  //             usersArray.push({ ...responseData[key], id: key });
  //           }
  //         }
  //         return usersArray;
  //       })
  //     )
  //     .subscribe((usersData: any[]) => {
  //       this.users = usersData
  //       console.log(this.users);
  //     });
  // }
  private fetchUsers() {
    this.http
      .get<{ [key: string]: Users }>('https://fivepmbatch-80453-default-rtdb.firebaseio.com/users.json')
      .pipe(
        map((responseData) => {
          const usersArray: Users[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              usersArray.push({ ...responseData[key], id: key });
            }
          }
          return usersArray;
        })
      )
      .subscribe((usersData) => {
        this.users = usersData
        console.log(usersData);
      });
  }
}
