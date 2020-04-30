import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './../../service/user';

interface SellerInfo {
  id: string;
  name: string;
  usertype: string;
  email: string;
  mobile: string;
}

const GUEST: SellerInfo[] = [{
  id: '1',
  name: 'seller001',
  usertype: 'seller',
  email: 'test1@cn.ibm.com',
  mobile: '13900009999'
}, {
  id: '2',
  name: 'seller002',
  usertype: 'seller',
  email: 'test2@cn.ibm.com',
  mobile: '13900008888'
}
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userservice: UserService) { }

  users: SellerInfo[];

  ngOnInit(): void {
    this.users = GUEST
  }

}
