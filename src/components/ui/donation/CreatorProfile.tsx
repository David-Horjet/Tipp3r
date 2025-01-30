import Image from "next/image"
import Creator from "../../../assets/images/Auguste.jpeg"

export default function CreatorProfile({ username, bio, loading }: { username: string; bio: string, loading:boolean }) {
  // console.log(wallet_address)
  if (!username && !loading) return <p className="text-black px-6">Creator details not found, Please check if the username is correct...</p>
  return (
    <>
      {loading ? (
        <p className="text-black px-6">Loading creator details...</p>
      ) : (
        <div className="bg-indigo-600 text-white p-6">
          <div className="flex items-center space-x-4">
            <Image
              src={Creator}
              alt={`${username}'s profile`}
              width={100}
              height={100}
              className="rounded-full bg-white h-24 w-24"
            />
            <div>
              <h1 className="text-2xl font-bold mb-2">{username}</h1>
              <p className="text-indigo-200">{bio}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

