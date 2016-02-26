export class Utility {
    
    static stringFormat(...argument: any[]) : string{
        var theString = argument[0];   
        for (var i = 1; i < argument.length; i++) {
                // "gm" = RegEx options for Global search (more than one instance)
                // and for Multiline search
                var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
                theString = theString.replace(regEx, argument[i]);
            }            
            return theString;        
    }    
    static getValueArray(data: any[], key : string): Array<string>{
        let array: Array<string> = [];
        data.forEach(
            value => {
                array.push(value[key]);
            }
        )        
        return array;
    }
    
    static getValueObject(data: any[], property: string, valueMatch: string): any {        
        var found: any;
        var result =  data.some (
            dt => {                
                found = dt;
                return (dt[property] === valueMatch);                                                      
            }
        )        
        if(result){
            return found;
        }        
        return null;
    }               
}