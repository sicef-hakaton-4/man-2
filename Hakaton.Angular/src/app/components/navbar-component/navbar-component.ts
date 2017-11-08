import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "../../services/auth.service";
@Component({
    selector: "navbar",
    templateUrl: 'navbar-component.html'
})
export class NavbarComponent {
    authUser: String;
    home: boolean = false;
    controls: boolean  = false;
    users: boolean = false;
    clients: boolean = false;
    suppliers: boolean = false;
    path: string;
    constructor(private authService: AuthenticationService, private route: ActivatedRoute ) {
        this.path = this.route.snapshot.url.map(x=> x.path).pop();
        this.authUser =localStorage.getItem('user');
        this.activateLink();
    }

    activateLink() : void {
        switch(this.path){
            case "index": {
                this.home = true;
                break;
            };
            case "control_management": {
                this.controls = true;
                break;
            };
            case "control_details": {
                this.controls = true;
                break;
            };
            case "user_management": {
                this.users = true;
                break;
            };
            case "client_management": {
                this.clients = true;
                break;
            };
            case "supplier_management": {
                this.suppliers = true;
                break;
            };
            default: break;
        }
    }
}
