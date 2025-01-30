"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAppKit, useAppKitAccount } from "@reown/appkit/react"
import { createClient } from "@supabase/supabase-js"
import Link from "next/link"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Login() {
  const { open } = useAppKit()
  const { address, isConnected } = useAppKitAccount()
  const router = useRouter()

  useEffect(() => {
    if (isConnected && address) {
      async function checkUserProfile(walletAddress: string) {
        try {
          const { data, error } = await supabase
            .from("creators")
            .select("*")
            .eq("wallet_address", walletAddress)
            .single()

          if (error && error.code !== "PGRST116") {
            console.error("Error fetching user:", error)
          }

          if (!data) {
            // No profile exists, redirect to profile setup
            router.push("/profile-setup")
          } else {
            // Profile exists, redirect to dashboard
            router.push("/dashboard")
          }
        } catch (error) {
          console.error("Error checking profile:", error)
        }
      }
      checkUserProfile(address)
    }
  }, [isConnected, address, router])

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-indigo-600">
      <div>
        <div className="flex justify-center mb-20">
          <Link href="/" className="flex items-center text-center">
            <span className="text-2xl font-bold text-white">Tipp3r</span>
          </Link>
        </div>
        <button
          onClick={() => open()}
          className="inline-flex gap-1 items-center px-8 py-3 border border-transparent text-sm font-medium rounded-full text-indigo-600 bg-white hover:bg-indigo-50"
        >
          Log in
        </button>
      </div>
    </div>
  )
}
