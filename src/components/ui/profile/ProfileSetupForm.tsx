"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useAppKitAccount } from "@reown/appkit/react";
import Input from "../Input/Input";
import Textarea from "../textarea/Textarea";
import Select from "../select/Select";
import Button from "../buttons/Button";
import { supabase } from "@/config/supabase";

const formSchema = z.object({
  username: z.string().min(3).max(20),
  bio: z.string().max(160).optional(),
  preferredToken: z.enum(["SOL", "USDC"]),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function ProfileSetupForm() {
  const router = useRouter();
  const { address } = useAppKitAccount(); // Get wallet address
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  });
  console.log(errors);

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    console.log(data);
    if (!address) {
      toast.error("Wallet not connected.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("creators").insert([
        {
          wallet_address: address,
          username: data.username.toLowerCase(),
          bio: data.bio,
          preferred_token: data.preferredToken,
        },
      ]);

      if (error) {
        toast.error(`Something went wrong while trying to create profile ${error.message}`);
      };

      toast.success("Profile created successfully!");

      router.push("/dashboard");
    } catch (error) {
      console.error("Error setting up profile:", error);
      toast.error(
        "There was a problem setting up your profile. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-black">
      <Input {...register("username")} placeholder="Username" />
      <Textarea {...register("bio")} placeholder="Bio (Optional)" />
      {/* <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture (Optional)</label>
        <div className="flex items-center space-x-4">
          <input type="file" accept="image/*" className="hidden" id="profile-picture" {...register("profilePicture")} />
          <Button type="button" variant="outline" onClick={() => document.getElementById("profile-picture")?.click()}>
            <Upload className="mr-2 h-4 w-4" /> Upload Image
          </Button>
        </div>
      </div> */}
      <Select
        label="Preferred Token"
        options={[
          { value: "SOL", label: "SOL" },
          { value: "USDC", label: "USDC" },
        ]}
        {...register("preferredToken")}
      />
      <div className="flex justify-center">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Setting up..." : "Complete Profile Setup"}
        </Button>
      </div>
    </form>
  );
}
