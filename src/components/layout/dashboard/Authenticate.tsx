"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAppKitAccount } from "@reown/appkit/react"

interface AuthenticateProps {
  children: React.ReactNode
}

const Authenticate: React.FC<AuthenticateProps> = ({ children }) => {
    const { address, isConnected } = useAppKitAccount()
  const router = useRouter()

  useEffect(() => {
    if (!isConnected || !address) {
      router.push("/") // Redirect to homepage if not connected
    }
  }, [isConnected, address, router])

  if (!isConnected || !address) return null // Prevent UI flicker

  return <>{children}</> // Render dashboard layout
}

export default Authenticate
