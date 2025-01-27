"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Home, DollarSign, Settings, LogOut, Menu, ArrowBigLeft, Wallet } from "lucide-react"
import { abbreviateAddress } from "@/utils/helpers"
import { useAppKit, useAppKitAccount } from "@reown/appkit/react"

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleLogout = () => {
    // Implement logout logic here
    router.push("/")
  }

  const { open } = useAppKit()
  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  }
  const { address, isConnected} = useAppKitAccount()

  // if (!isConnected) {
  //   router.push("/")
  // }

  return (
    <div className="flex h-screen bg-gray-100 text-black">
      <motion.aside
        initial="closed"
        animate={isSidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ duration: 0.3 }}
        className="fixed block md:hidden inset-y-0 left-0 z-50 w-64 bg-indigo-700 text-white shadow-lg md:relative md:translate-x-0"
      >
        <div className="flex justify-between md:justify-center p-4">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-white">Tipp3r</span>
          </Link>
          <button className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <ArrowBigLeft className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-6">
          <Link href="/dashboard" className="block px-4 py-2 hover:bg-indigo-600">
            <Home className="inline-block w-5 h-5 mr-2" />
            Dashboard
          </Link>
          <Link href="/dashboard/earnings" className="block px-4 py-2 hover:bg-indigo-600">
            <DollarSign className="inline-block w-5 h-5 mr-2" />
            Earnings
          </Link>
          <Link href="/dashboard/settings" className="block px-4 py-2 hover:bg-indigo-600">
            <Settings className="inline-block w-5 h-5 mr-2" />
            Settings
          </Link>
        </nav>
        <div className="absolute bottom-0 w-full p-4">
          <button onClick={handleLogout} className="flex items-center px-4 py-2 hover:bg-indigo-600 w-full">
            <LogOut className="inline-block w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </motion.aside>
      <div
        className="fixed hidden md:block inset-y-0 left-0 z-50 w-64 bg-indigo-700 text-white shadow-lg md:relative md:translate-x-0"
      >
        <div className="flex justify-center p-4">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-white">Tipp3r</span>
          </Link>
        </div>
        <nav className="mt-6">
          <Link href="/dashboard" className="block px-4 py-2 hover:bg-indigo-600">
            <Home className="inline-block w-5 h-5 mr-2" />
            Dashboard
          </Link>
          <Link href="/dashboard/earnings" className="block px-4 py-2 hover:bg-indigo-600">
            <DollarSign className="inline-block w-5 h-5 mr-2" />
            Earnings
          </Link>
          <Link href="/dashboard/settings" className="block px-4 py-2 hover:bg-indigo-600">
            <Settings className="inline-block w-5 h-5 mr-2" />
            Settings
          </Link>
        </nav>
        <div className="absolute bottom-0 w-full p-4">
          <button onClick={handleLogout} className="flex items-center px-4 py-2 hover:bg-indigo-600 w-full">
            <LogOut className="inline-block w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <button className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              {
                isConnected && address ? (
                  <button onClick={() => open()} className="ml-3 inline-flex gap-1 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    <Wallet className="w-8" />
                    {abbreviateAddress(address)}
                  </button>
                ) : (
                  <></>
                )
              }
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout

