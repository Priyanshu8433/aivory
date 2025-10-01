import { UserProfile, useUser, SignOutButton } from "@clerk/nextjs";
import { Avatar, AvatarImage } from "../shadcn/ui/avatar";
import { useState } from "react";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const ProfileTrigger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoaded } = useUser();

  if (!isLoaded || !user) {
    return <div>Laoding</div>;
  }
  return (
    <>
      <div className="flex w-full justify-between items-center">
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex gap-2 items-center hover:cursor-pointer"
        >
          <Avatar>
            <AvatarImage src={user.imageUrl} />
          </Avatar>
          <span className="text-foreground">{user.fullName}</span>
        </div>
        <SignOutButton redirectUrl="/">
          <LogOut className="hover:cursor-pointer" />
        </SignOutButton>
      </div>

      {isOpen && (
        <div
          className="fixed top-0 left-0 bg-black/40 backdrop-blur flex items-center justify-center w-full h-full"
          onClick={() => setIsOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <UserProfile routing="hash" onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileTrigger;
