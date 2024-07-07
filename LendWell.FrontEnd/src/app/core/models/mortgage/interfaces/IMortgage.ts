export interface IMortgage {
    
    Id : number;
    PurchasePrice : string;
    BorrowingAmount : string;
    DepositAmout : string;
    RepaymentPeriod : string;
    TotalHouseHoldIncome : string;
    AdditionalFunding? : string;
     
     isValid: () => string;
}