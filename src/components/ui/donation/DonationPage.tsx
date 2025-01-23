"use client"

import { useState } from "react"
import CreatorProfile from "./CreatorProfile"
import RecentSupporters from "./RecentSupporters"
import DonationForm from "./DonationForm"
import PaymentMethodSelection from "./PaymentMethodSelection"
import ConfirmDonation from "./ConfirmDonation"
import ThankYouMessage from "./ThankYouMessage"

type DonationStep = "amount" | "payment" | "confirm" | "success"

export default function DonationPage({ username }: { username: string }) {
  const [step, setStep] = useState<DonationStep>("amount")
  const [amount, setAmount] = useState<number>(0)
  const [paymentMethod, setPaymentMethod] = useState<"crypto" | "fiat" | null>(null)

  const handleAmountSubmit = (value: number) => {
    setAmount(value)
    setStep("payment")
  }

  const handlePaymentMethodSelect = (method: "crypto" | "fiat") => {
    setPaymentMethod(method)
    setStep("confirm")
  }

  const handleConfirmDonation = () => {
    // Here you would typically process the donation
    // For now, we'll just move to the success step
    setStep("success")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <CreatorProfile username={username} />
        <div className="p-6">
          <RecentSupporters />
          {step === "amount" && <DonationForm onSubmit={handleAmountSubmit} />}
          {step === "payment" && <PaymentMethodSelection onSelect={handlePaymentMethodSelect} />}
          {step === "confirm" && (
            <ConfirmDonation amount={amount} paymentMethod={paymentMethod} onConfirm={handleConfirmDonation} />
          )}
          {step === "success" && <ThankYouMessage username={username} />}
        </div>
      </div>
    </div>
  )
}

