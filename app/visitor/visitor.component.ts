import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../_models/index';
import { Visitors } from '../_models/index_visitor';
import { AlertService, UserService } from '../_services/index';
import { Staff } from '../visitor/staff';

@Component({
    moduleId: module.id,
    templateUrl: 'visitor.component.html'
})

export class VisitorComponent {
    model: any = {};
    loading = false;
    currentUser: User;
    users: User[] = [];
    selectedUser: User;

    selectedStaff:Staff = new Staff(2, 'Lauren');
    Staffs = [
       new Staff(1, 'Gabby' ),
       new Staff(2, 'Gavin' ),
       new Staff(3, 'Armie' )
    ];

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { 
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    visitorregister() {
        /*
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
         */
         this.alertService.error(this.model.lookingfor);
    }

    onSelect(user: User): void {
        this.selectedUser = user;
    };

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    gotoSignInPage(model: Visitors): void {
      //let link = ['/detail',hero.id];      

      if (model.visitortype == 'branch'){
          let link = ['/locator'];
          this.router.navigate(link);
      } 
      else {
        let link = ['/welcome'];
        this.router.navigate(link);
      }
      
    } 

 }
/*
  public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
    'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
    'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
    'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
    'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
    'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
    'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
    'Zagreb', 'Zaragoza', 'Łódź'];

  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }
*/


