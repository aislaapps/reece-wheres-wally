import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, AuthenticationService ,UserService} from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status

        this.createDefaultUser("Armie","Isla");
        this.createDefaultUser("Gavin","Netto");
        this.createDefaultUser("Gabi","Curin");
        this.createDefaultUser("Lauren","Hanks");

        this.authenticationService.logout();
    }


    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate(['/']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    createDefaultUser(name: String, surname: String) {

        this.model.username=name;
        this.model.password=name;
        this.model.firstName=name;
        this.model.lastName=surname;
        this.userService.create(this.model)
    }

}
