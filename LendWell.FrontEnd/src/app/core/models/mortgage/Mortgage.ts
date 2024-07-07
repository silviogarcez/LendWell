import { IMortgage } from "./interfaces/IMortgage";

export class Mortgage implements IMortgage {

    Id: number;
    PurchasePrice: string;
    BorrowingAmount: string;
    DepositAmout: string;
    RepaymentPeriod: string;
    TotalHouseHoldIncome: string;    
    AdditionalFunding?: string | undefined;

    constructor (){
        this.Id = 0;
        this.RepaymentPeriod = "0";
        this.BorrowingAmount = "0";
        this.DepositAmout = "0";
        this.PurchasePrice = "0";
        this.TotalHouseHoldIncome = "0";
    }
    
    isValid(): string {
        var message = "";

        if (this.Id > 0)
            message = "The property Id is obrigatory";

        // if (this.PurchasePrice > 0)
        //     message = "The property PurchasePrice is obrigatory";

        // if (this.DepositAmout > 0)
        //     message = "The property DepositAmout is obrigatory";

        // if (this.BorrowingAmount > 0)
        //     message = "The property BorrowingAmount is obrigatory";

        // if (this.AdditionalFunding !== undefined)
        // {
        //     if (((this.BorrowingAmount + this.DepositAmout) - this.AdditionalFunding) !=  this.PurchasePrice)
        //         message = "The property BorrowingAmount is wrong";
        // }
        // else
        // {
        //     if ((this.BorrowingAmount + this.DepositAmout) !=  this.PurchasePrice)
        //         message = "The property BorrowingAmount is wrong";
        // }        

        // if (this.RepaymentPeriod > 0)
        //     message = "The property RepaymentPeriod is obrigatory";

        // if (this.TotalHouseHoldIncome > 0)
        //     message = "The property TotalHouseHoldIncome is obrigatory";

        return message;
    } 

    

}