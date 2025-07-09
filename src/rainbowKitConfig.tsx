"use client"

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { anvil, zksync} from "wagmi/chains"

export default getDefaultConfig({
    appName: "Super SAAS",
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!, // https://cloud.reown.com/
    chains: [anvil, zksync],
    ssr: false  // рендеринг на стороне сервера
});