import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../_models/index';
import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    selectedUser: User;
    //homeMessage = "Locate Or SMS Wally's friends";
    homeMessage = "";

    constructor(private userService: UserService,
        private router: Router,
        private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    locateUser(id) {
        this.homeMessage = "Friend Located";
    }

    SMSUser(id) {
        //this.alertService.success('SMS successful', true);
        this.homeMessage = "SMS sent";
    }

    onSelect(user: User): void {
        this.selectedUser = user;
        this.homeMessage = "";
    };

 //   gotoMap(): void {
 //       //this.router.navigate(['/detail', this.selectedHero.id]);
 //       //this.router.navigate(['/detail', this.selectedUser.id]);
 //       this.router.navigate(['../login',this.selectedUser]);
 //   }


    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }


}