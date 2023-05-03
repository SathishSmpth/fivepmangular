import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor(private http: HttpClient) {}
  users = []
  ngOnInit() {
    this.fetchUsers();
  }
  private fetchUsers() {
    this.http
      .get('https://fivepmbatch-80453-default-rtdb.firebaseio.com/users.json')
      .pipe(
        map((responseData: any) => {
          const usersArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              usersArray.push({ ...responseData[key], id: key });
            }
          }
          return usersArray;
        })
      )
      .subscribe((usersData: any) => {
        this.users = usersData
        console.log(this.users);
      });
  }
}
