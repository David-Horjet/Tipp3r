import Image from "next/image"
import Creator from "../../../assets/images/Auguste.jpeg"
import { useEffect, useState } from "react";
import { supabase } from "@/config/supabase";
import { toast } from "sonner";

export default function CreatorProfile({ username }: { username: string }) {
  const [creator, setCreator] = useState<{ username: string; wallet_address: string; bio: string }>({
    username: "",
    wallet_address: "",
    bio: ""
  })
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    async function fetchCreator() {
      const { data, error } = await supabase.from("creators").select("username, wallet_address, bio").eq("username", username.toLowerCase()).single()
      if (error) {
        setLoading(false)
        console.error("Error fetching creator:", error)
        toast.error("Error fetching creator")
      } else {
        setLoading(false)
        setCreator(data)
      }
    }

    fetchCreator()
  }, [username])

  console.log(creator);


  if (!creator && !loading) return <p className="text-black px-6">Creator details not found, Please check if the username is correct...</p>
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
              <h1 className="text-2xl font-bold mb-2">{creator.username}</h1>
              <p className="text-indigo-200">{creator.bio}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

