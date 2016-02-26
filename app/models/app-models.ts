export interface IStatus {
    status?:  boolean;
    message?: string;
}

export class KeyValue {
    key: string|number;
    value: string;
    
    constructor(key: (string|number), value: string) { 
        this.key =  key;
        this.value = value;               
    }                
}