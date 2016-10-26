import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'locator.component.html'
})

export class LocatorComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    selectedUser: User;
    homeMessage = "Locate Or SMS Wally's friends";

    constructor(private userService: UserService,private router: Router,) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        //this.loadAllUsers();
    }

    goBack(): void {

        //window.history.back();
        let link = ['/visitor'];
        this.router.navigate(link);

    };
}
