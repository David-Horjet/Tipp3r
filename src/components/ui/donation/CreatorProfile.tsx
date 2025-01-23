import Image from "next/image"

export default function CreatorProfile({ username }: { username: string }) {
  return (
    <div className="bg-indigo-600 text-white p-6">
      <div className="flex items-center space-x-4">
        <Image
          src="/placeholder.svg?height=100&width=100"
          alt={`${username}'s profile`}
          width={100}
          height={100}
          className="rounded-full bg-white"
        />
        <div>
          <h1 className="text-2xl font-bold">{username}</h1>
          <p className="text-indigo-200">Content Creator</p>
        </div>
      </div>
      <p className="mt-4">Support my content and help me create more awesome stuff for you!</p>
    </div>
  )
}

