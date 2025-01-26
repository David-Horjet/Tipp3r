"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Upload } from "lucide-react"
import { toast } from "sonner"
import Input from "../Input/Input"
import Textarea from "../textarea/Textarea"
import Button from "../buttons/Button"
import Select from "../select/Select"

const formSchema = z.object({
  username: z.string().min(3).max(20),
  bio: z.string().max(160).optional(),
  profilePicture: z.instanceof(File).optional(),
  preferredToken: z.enum(["SOL", "USDC"]),
})

type FormSchemaType = z.infer<typeof formSchema>

export default function ProfileSetupForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      bio: "",
      preferredToken: "USDC",
    },
  })

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    setIsSubmitting(true) 
    try {
      // Here you would typically send the form data to your backend
      console.log(data)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast.success("Profile created successfully!")

      // Redirect to dashboard or home page
      router.push("/dashboard")
    } catch (error) {
      console.error("Error setting up profile:", error)
      toast.error("There was a problem setting up your profile. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-black">
      <Input label="Username" {...register("username")}
      // error={errors.username?.message}
      />
      <Textarea label="Bio (Optional)" {...register("bio")}
      // error={errors.bio?.message}
      />
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture (Optional)</label>
        <div className="flex items-center space-x-4">
          <input type="file" accept="image/*" className="hidden" id="profile-picture" {...register("profilePicture")} />
          <Button type="button" variant="outline" onClick={() => document.getElementById("profile-picture")?.click()}>
            <Upload className="mr-2 h-4 w-4" /> Upload Image
          </Button>
          {/* Display selected file name */}
        </div>
      </div>
      <Select
        label="Preferred Token"
        options={[
          { value: "SOL", label: "SOL" },
          { value: "USDC", label: "USDC" },
        ]}
        {...register("preferredToken")}
      />
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Setting up..." : "Complete Profile Setup"}
      </Button>
    </form>
  )
}

