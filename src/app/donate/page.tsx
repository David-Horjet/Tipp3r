"use client"

import { Suspense, useEffect, useState } from 'react'
import DonationPage from "@/components/ui/donation/DonationPage"
import { useSearchParams } from 'next/navigation'

// ✅ Explicitly defining PageProps to ensure params are properly typed
const DonatePage = () => {
  const searchParams = useSearchParams()
  const [creator, setCreator] = useState<string | null>(null)

  useEffect(() => {
    const creatorParam = searchParams.get('creator')
    setCreator(creatorParam)
  }, [searchParams])

  if (!creator) {
    return <div>Error: Invalid creator</div>
  }

  return (
    <DonationPage username={creator} />
  )
}

const DonationPageContent = () => {
  return (
    <Suspense fallback={<div>Loading creator...</div>}>
      <DonatePage />
    </Suspense>
  );
};

export default DonationPageContent;
