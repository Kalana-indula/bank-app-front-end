import React from "react";
import {Sidebar} from "lucide-react";

export default function RootLayout({children}: {children: React.ReactNode}) {

    const loggedIn= {
        firstName: 'Kalana',
        lastName:'Costa',
    };

    return (
        <main className="flex h-screen w-full">
            <Sidebar user={loggedIn}/>
            {children}
        </main>
    )
}