import ProfileSetupForm from "@/components/ui/profile/ProfileSetupForm"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Set Up Your Creator Profile | CryptoGive",
  description: "Complete your creator profile to start receiving donations.",
}

export default function ProfileSetupPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Set Up Your Creator Profile</h2>
        <p className="mt-2 text-center text-sm text-gray-600">Complete your profile to start receiving donations</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <ProfileSetupForm />
        </div>
      </div>
    </div>
  )
}

