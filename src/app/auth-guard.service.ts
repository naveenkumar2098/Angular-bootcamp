import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
declare var $: any;

@Injectable({
    providedIn: "root",
})

export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
        console.log($('#email'));
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if ($('#email').val() =="naveen.kumar@tothenew.com" && $('#password').val()=='Naveen123@') {
            return true;
        } else {
            this.router.navigate(['/404']);

            return false;
        }
    }
}