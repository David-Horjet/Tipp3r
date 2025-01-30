import type React from "react"
import { Copy, Share2 } from "lucide-react"
import { toast } from "sonner"
import { domain } from "@/utils/helpers"
import { useEffect, useState } from "react"

const DonationLink = ({ username, loading }: { username: string, loading: boolean }) => {
  const [creator, setCreator] = useState("") // This would typically come from the user's profile

  useEffect(() => {
    if (!loading && username) {
      setCreator(username.toLowerCase())
    }
  }, [username])

  const donationLink = `${domain()}/donate?creator=${creator}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(donationLink)
    toast.info("Donation link copied to clipboard!")
  }

  const shareLink = () => {
    if (navigator.share) {
      navigator.share({
        title: "My CryptoGive Donation Link",
        text: "Support me on CryptoGive!",
        url: donationLink,
      })
    } else {
      toast.error("Web Share API is not supported in your browser")
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Donation Link</h2>
      <div className="flex items-center mb-4">
        <input type="text" value={donationLink} readOnly className="flex-grow p-2 border rounded-l-md" />
        <button onClick={copyToClipboard} className="p-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700">
          <Copy className="w-5 h-5" />
        </button>
      </div>
      <button
        onClick={shareLink}
        className="w-full p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center justify-center"
      >
        <Share2 className="w-5 h-5 mr-2" />
        Share Link
      </button>
    </div>
  )
}

export default DonationLink

