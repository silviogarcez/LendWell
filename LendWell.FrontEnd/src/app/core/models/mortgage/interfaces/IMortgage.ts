export interface IMortgage {
    
    Id : number;
    PurchasePrice : number;
    BorrowingAmount : number;
    DepositAmout : number;
    RepaymentPeriod : number;
    TotalHouseHoldIncome : number;
    AdditionalFunding? : number;
     
     isValid: () => string;
}