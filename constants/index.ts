import {BadgeDollarSign, CircleDollarSign, CreditCard, Home, ReceiptText} from "lucide-react";

export const sidebarLinks = [
    {
        label: "Home",
        route: "/",
        icon: Home,
    },
    {
        label: "My Banks",
        route: "/my-banks",
        icon: CircleDollarSign,
    },
    {
        label: "Transaction History",
        route: "/transaction-history",
        icon: ReceiptText,
    },
    {
        label: "Payment Transfer",
        route: "/payment-transfer",
        icon: BadgeDollarSign,
    },
    {
        label: "Connect Bank",
        route: "/connect-bank",
        icon: CreditCard,
    },
];