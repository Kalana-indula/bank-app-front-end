export interface HeaderProps{
    type?:"title"|"greeting";
    title:string;
    subtext:string;
    user?:string;
}

export interface TotalBalanceBoxProps{
    accounts:Account[];
    totalBanks:number;
    totalCurrentBalance:number;
}

export interface DoughnutChartProps{
    accounts: Account[];
}