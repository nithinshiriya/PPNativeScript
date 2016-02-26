import "reflect-metadata";
import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";

import {LoginPage} from "./pages/login/login";
import {NewpollPage} from "./pages/newpoll/newpoll";


import {registerElement} from "nativescript-angular/element-registry"
registerElement("CardView", require('nativescript-cardview').CardView);

@Component({
    selector: "main",
    directives: [NS_ROUTER_DIRECTIVES],
    template: "<StackLayout><page-router-outlet></page-router-outlet></StackLayout>"
})
@RouteConfig([
    { path: "/", component: LoginPage, as: "Login" },
    { path: "/NewPoll", component: NewpollPage, as: "NewPoll" },
    { path: "/List", component: LoginPage, as: "List" }
])
export class AppComponent {}