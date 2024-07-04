import { IInput } from "./interfaces/IInput";

export class Input implements IInput{
    Description: string;
    Value: any;
    Order: number;
    Required: boolean;

    constructor(){
        this.Description = "";
        this.Value = "";
        this.Order = 0;
        this.Required = false;
    }    
    
}