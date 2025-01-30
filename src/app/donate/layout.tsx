import { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
    title: "Donate to Creator | CryptoGive",
    description: "Support your favorite content creator with crypto donations.",
}

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <div>
            {children}
        </div>
    )
}

export default DashboardLayout

