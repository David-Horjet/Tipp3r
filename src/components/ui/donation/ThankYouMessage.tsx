import { useState } from "react"

export default function ThankYouMessage({ username }: { username: string }) {
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the message to the backend
        console.log("Message submitted:", message)
        setMessage("")
    }

    return (
        <div className="space-y-4 text-black">
            <h2 className="text-2xl font-bold text-center text-indigo-600">Thank You for Your Support!</h2>
            <p className="text-center">Your donation to {username} has been successfully processed.</p>
            <form onSubmit={handleSubmit} className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Leave a message for {username} (optional)
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your message here..."
                ></textarea>
                <button
                    type="submit"
                    className="mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

