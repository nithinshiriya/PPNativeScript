import {Component, ChangeDetectionStrategy} from "angular2/core";
import {Router} from "angular2/router";
import {action} from "ui/dialogs";
import {KeyValue} from "../../models/app-models"
import {Utility} from "../../utils/utility"




@Component({
  selector: "newpoll",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "pages/newpoll/newpoll.html",  
})
export /**
 * Newpoll
 */
class NewpollPage {
    
    expiryList: Array<KeyValue>;
    expiryListOptions: Array<string>;
    
    constructor() {
        
    }
    
    displayExpiryList() {

    }
    
    private showExpirylistAction() {

    }
}