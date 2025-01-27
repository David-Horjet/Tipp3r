import type { Metadata } from "next"
import DonationPage from "@/components/ui/donation/DonationPage"

export const metadata: Metadata = {
  title: "Donate to Creator | CryptoGive",
  description: "Support your favorite content creator with crypto donations.",
}

// ✅ Explicitly defining PageProps to ensure params are properly typed
export default function DonatePage({ params }: { params: { username: string } }) {
  if (!params || !params.username) {
    return <div>Error: Invalid username</div>
  }

  return <DonationPage username={params.username} />
}

