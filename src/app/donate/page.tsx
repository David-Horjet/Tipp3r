"use client"

import { Suspense } from 'react'
import DonationPage from "@/components/ui/donation/DonationPage"
import { useSearchParams } from 'next/navigation'

// ✅ Explicitly defining PageProps to ensure params are properly typed
export default function DonatePage() {
  const searchParams = useSearchParams()

  const creator = searchParams.get('creator')
  if (!creator) {
    return <div>Error: Invalid creator</div>
  }

  return (
    <Suspense fallback={<div>Loading creator...</div>}>
      <DonationPage username={creator} />
    </Suspense>
  )
}
