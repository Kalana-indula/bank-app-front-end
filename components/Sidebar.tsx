"use client";

import React from "react";
import { SideBarProps } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import {LogOut, Search,} from "lucide-react";
import {sidebarLinks} from "@/constants";



const Sidebar = ({ user }: SideBarProps) => {
    const pathname = usePathname();

    const userName = user.name || `${user.firstName} ${user.lastName}` || "User";

    const userEmail = user.email || "No email";

    const userInitials = `${user.firstName?.charAt(0) ?? ""}${user.lastName?.charAt(0) ?? ""}`;

    return (
        <section className="hidden h-screen w-[280px] flex-col justify-between border-r border-gray-100 bg-white px-4 py-8 sm:flex">
            <nav className="flex flex-col">
                {/* Logo */}
                <Link href="/" className="mb-7 flex cursor-pointer items-center gap-2 px-2">
                    <Image src="/logo.png" alt="Logo" width={34} height={34} />
                    <h2 className="text-[2rem] font-semibold text-[#17335C]">
                        Horizon
                    </h2>
                </Link>

                {/* Search box */}
                <div className="relative mb-6">
                    <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-500" />

                    <Input
                        placeholder="Search"
                        className="h-[44px] w-[231px] rounded-md border-gray-300 pl-11 text-[16px] shadow-none placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                </div>

                {/* Links */}
                <div className="flex flex-col gap-3">
                    {sidebarLinks.map((item) => {
                        const Icon = item.icon;

                        const isActive = item.route === "/" ? pathname === "/" : pathname.startsWith(item.route);

                        return (
                            <Link
                                key={item.label}
                                href={item.route}
                                className={`flex h-[56px] w-full items-center gap-4 rounded-[4px] px-3 transition-all ${
                                    isActive
                                        ? "bg-gradient-to-r from-[#0179FE] to-[#4893FF] text-white hover:from-blue-800 hover:to-blue-800"
                                        : "text-slate-700 hover:bg-slate-50"
                                }`}
                            >
                                <Icon
                                    className={`size-5 shrink-0 ${
                                        isActive ? "text-white" : "text-slate-500"
                                    }`}
                                    strokeWidth={1.8}
                                />
                                <span className="text-[16px] font-semibold">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Bottom user section */}
            <footer className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between">
                    <div className="flex min-w-0 items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-600">
                            {userInitials || "U"}
                        </div>

                        <div className="min-w-0">
                            <p className="truncate text-[14px] font-semibold text-slate-700">
                                {userName}
                            </p>
                            <p className="truncate text-[14px] text-slate-500">
                                {userEmail}
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="flex size-8 items-center justify-center text-slate-500 hover:text-slate-700"
                    >
                        <LogOut className="size-5" strokeWidth={1.8} />
                    </button>
                </div>
            </footer>
        </section>
    );
};

export default Sidebar;