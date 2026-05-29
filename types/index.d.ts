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

export interface User{
    $id: string;
    email: string;
    userId: string;
    dwollaCustomerUrl: string;
    dwollaCustomerId: string;
    firstName: string;
    lastName: string;
    name: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;
}

export interface SideBarProps{
    user:User;
}