import { IInput } from "./interfaces/IInput";

export class Input implements IInput{
    Description: string;
    Value: any;
    Order: number;
    Required: boolean;
    IsInput: boolean;
    Name: string;

    constructor(){
        this.Description = "";
        this.Value = "";
        this.Order = 0;
        this.Required = false;
        this.IsInput = false;
        this.Name = "";
    }    
}