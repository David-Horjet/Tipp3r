'use client'

import { solanaWeb3JsAdapter, projectId, networks } from '@/config'
import { createAppKit } from '@reown/appkit/react'
import React, { type ReactNode } from 'react'

// Set up metadata
const metadata = {
  name: 'next-reown-appkit',
  description: 'next-reown-appkit',
  url: 'https://github.com/0xonerb/next-reown-appkit-ssr', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Create the modal
export const modal = createAppKit({
  adapters: [solanaWeb3JsAdapter],
  projectId,
  networks,
  metadata,
  themeMode: 'light',
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    swaps: true, // set to true by default
    onramp: true // set to true by default
  },
  themeVariables: {
    '--w3m-accent': '#000000',
  }
})

function AppkitProvider({ children }: { children: ReactNode }) {
  return (
    <>{children}</>
  )
}

export default AppkitProvider