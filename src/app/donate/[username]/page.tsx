import type { Metadata } from "next"
import DonationPage from "@/components/ui/donation/DonationPage"

export const metadata: Metadata = {
  title: "Donate to Creator | CryptoGive",
  description: "Support your favorite content creator with crypto donations.",
}

export default function DonatePage({ params }: { params: { username: string } }) {
  return <DonationPage username={params.username} />
}

