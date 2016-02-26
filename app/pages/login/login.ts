import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {RestUser} from "../../models/rest-models";

@Component({
  selector: "login",
  templateUrl: "pages/login/login.html",  
})
export class LoginPage {
    
    user:RestUser;
    
    email:string;
    password: string;
    
    
    constructor(private _router: Router) {
        this.user = new RestUser();        
        this.email = "nithinshiriya@gmail.com"
    }
    
    signIn() {
        console.log(this.email);
        console.log(this.password);
    }    
    
    register() {
        console.log('Very cool - register');
    }
    
    createPoll() {
        this._router.navigate(["NewPoll"]);
    }
}