import Link from "next/link"
import { sidebarLinks } from "@/constants"
function LeftSidebar() {
    return (
        <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                {sidebarLinks.map((link) => (
                    <Link
                        href={link.route}
                        key={link.label}
                        className="leftsidebar_link"
                    >
                       <span className="text-light-1 max-lg:hidden"> {link.imgURL} </span>
                       <span className="text-light-1">{link.label}</span>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default LeftSidebar