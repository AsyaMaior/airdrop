"use client"

import InputField from "@/components/ui/InputField"
import { useState } from "react"
import { chainsToTSender, erc20Abi, tsenderAbi } from "@/constants"
import { useChainId, useConfig, useAccount } from "wagmi"
import { readContract } from '@wagmi/core'

export default function AirdropForm() {
    const [tokenAddress, SetTokenAddress] = useState("")
    const [recipients, SetRecipients] = useState("")
    const [amounts, SetAmounts] = useState("")
    const chainId = useChainId()
    const config = useConfig()
    const account = useAccount()


    async function getApprovedAmount(tSenderAddress: string | null): Promise<number>{
        if(!tSenderAddress) {
            alert("No address found, please use a supported chain")
            return 0
        }
        const approvedAmount = await readContract(config, {
            abi: erc20Abi,
            address: tokenAddress as `0x${string}`,
            functionName: "allowance",
            args: [account.address, tSenderAddress as `0x${string}`]
        })
        return approvedAmount as number
    }



    async function handleSubmit() {
        console.log("Hi from submit!")
        const tSenderAddress = chainsToTSender[chainId]["tsender"]
        const approvedAmount = await getApprovedAmount(tSenderAddress)
        console.log(approvedAmount)

    }




    return(
        <div>
        
            <InputField
                label="Token address"
                placeholder="0x..."
                type="text"
                value={tokenAddress}
                onChange={(e) => SetTokenAddress(e.target.value)}
            />      
            <InputField
                label="Recipients addresses"
                placeholder="0x..., 0x..., 0x..."
                type="text"
                value={recipients}
                large={true}
                onChange={(e) => SetRecipients(e.target.value)}
            />
            <InputField
                label="Amounts"
                placeholder="100, 200, 300..."
                type="text"
                value={amounts}
                large={true}
                onChange={(e) => SetAmounts(e.target.value)}
            />    
            <button onClick={handleSubmit} 
            className={"cursor-pointer flex items-center justify-center px-6 py-3 rounded-[9px] text-white transition-colors font-semibold relative border bg-blue-500 hover:bg-blue-600 border-blue-500"}>
                Send tokens
            </button>
        </div>
    )
}