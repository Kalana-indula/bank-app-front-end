import React from 'react'
import {TotalBalanceBoxProps} from "@/types";
import AnimatedCounter from "@/components/AnimatedCounter";
import DoughnutChart from "@/components/DoughnutChart";

const TotalBalanceBox = ({
    accounts=[],totalBanks,totalCurrentBalance
}:TotalBalanceBoxProps) => {
    return (
        <section className="total-balance">
            <div className="total-balance-chart">
            {/*  DoughnutChart  */}
                <DoughnutChart accounts={accounts}/>
            </div>

            <div className="">
                <h2 className="header-2">
                    Bank Account : {totalBanks}
                </h2>
                <div className="">
                    <p>
                        Total Current Balance
                    </p>

                    <div>
                        <AnimatedCounter amount={totalCurrentBalance} />
                    </div>
                </div>
            </div>

        </section>
    )
}
export default TotalBalanceBox
