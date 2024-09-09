import Link from "next/link"
import Image from "next/image"
import { ClerkProvider, OrganizationSwitcher, SignedIn, SignOutButton, UserButton } from "@clerk/nextjs"
import { CiLogout } from "react-icons/ci";

function Topbar() {
    const isUserLoggedIn = true;

    return (
        <ClerkProvider>
        <nav className="topbar">
            <Link href="/" className="flex items-center gap-4">
                <Image src="/assets/logo.svg" alt="logo" width={28} height={28}/>
                <p className="text-heading3-bold text-light-1
                max-xs:hidden
                ">San Isidro Lonas</p>
            </Link>

            <div className="flex items-center gap-1">
                <div className="block md:hidden">
                    <SignedIn>
                        <SignOutButton>
                            <div className="flex cursor-pointer">
                            <CiLogout size={24} className="text-white hover:text-blue"/>
                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>
               <UserButton />

            </div>
        </nav>
    </ClerkProvider>
    )
}

export default Topbar