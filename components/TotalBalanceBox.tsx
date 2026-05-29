import React from 'react'
import {TotalBalanceBoxProps} from "@/types";
import AnimatedCounter from "@/components/AnimatedCounter";
import DoughnutChart from "@/components/DoughnutChart";
import {Button} from "@/components/ui/button";

const TotalBalanceBox = ({
    accounts=[],totalBanks,totalCurrentBalance
}:TotalBalanceBoxProps) => {
    return (
        <section className="total-balance w-[703px] h-[168px] border shadow py-6 px-4 flex items-center rounded-md">
            <div className="total-balance-chart h-full">
            {/*  DoughnutChart  */}
                <DoughnutChart accounts={accounts}/>
            </div>

            <div className="flex flex-col ml-[20px] justify-between h-full text-[20px]">
                <h2 className="header-2 font-semibold">
                    Bank Account : {totalBanks}
                </h2>
                <div className="flex flex-col gap-2">
                    <p className="text-[13px] text-gray-400">
                        Total Current Balance
                    </p>

                    <div className="text-[30px] font-semibold">
                        <AnimatedCounter amount={totalCurrentBalance} />
                    </div>
                </div>
            </div>

        {/*  Add bank section  */}
            <div className="">
                <div className="">
                    <Button/>
                </div>
            </div>

        </section>
    )
}
export default TotalBalanceBox
