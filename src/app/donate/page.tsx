"use client"

import DonationPage from "@/components/ui/donation/DonationPage"
import { useSearchParams } from 'next/navigation'

// ✅ Explicitly defining PageProps to ensure params are properly typed
export default function DonatePage() {
  const searchParams = useSearchParams()

  const creator = searchParams.get('creator')
  if (!creator) {
    return <div>Error: Invalid creator</div>
  }

  return <DonationPage username={creator} />
}

