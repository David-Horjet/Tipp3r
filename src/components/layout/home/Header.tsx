'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Wallet, X } from 'lucide-react'
import { useAppKit, useAppKitAccount } from '@reown/appkit/react'
import { abbreviateAddress } from '@/utils/helpers'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { open } = useAppKit()

  const { address, isConnected, caipAddress, status, embeddedWalletInfo } = useAppKitAccount()

  console.log(address, isConnected, caipAddress, status, embeddedWalletInfo)

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">Tipp3r</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="#features" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
              Features
            </Link>
            <Link href="#how-it-works" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              How It Works
            </Link>
            <Link href="#testimonials" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
              Testimonials
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {
              isConnected && address ? (
                <button onClick={() => open()} className="ml-3 inline-flex gap-1 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  <Wallet className="w-8" />
                  {abbreviateAddress(address)}
                </button>
              ) : (
                <>
                  <button onClick={() => open()} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                    Log in
                  </button>
                  <button onClick={() => open()} className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Sign up
                  </button>
                </>
              )
            }
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div >

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="#features" className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50">
              Features
            </Link>
            <Link href="#how-it-works" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300">
              How It Works
            </Link>
            <Link href="#testimonials" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300">
              Testimonials
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="mt-3 space-y-1">
              <Link href="/login" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                Log in
              </Link>
              <Link href="/signup" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header >
  )
}

export default Header

