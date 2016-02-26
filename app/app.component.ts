import "reflect-metadata";
import {RouteConfig} from "angular2/router";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";

import {BaseComponent} from "./utils/base.decorator";
import {LoginPage} from "./pages/login/login";
import {NewpollPage} from "./pages/newpoll/newpoll";

@BaseComponent({
    selector: "main",
    directives: [NS_ROUTER_DIRECTIVES],
    template: "<StackLayout><page-router-outlet></page-router-outlet></StackLayout>",
    registerElements: [{
        name: "CardView",
        resolver: () => require("nativescript-cardview").CardView
    }]
})
@RouteConfig([
    { path: "/", component: LoginPage, as: "Login" },
    { path: "/NewPoll", component: NewpollPage, as: "NewPoll" },
    { path: "/List", component: LoginPage, as: "List" }
])
export class AppComponent {}