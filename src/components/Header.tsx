import { Logo } from "./Logo";
import { Sidebar } from "./Sidebar";
import { Video } from "./Video";

export function Header() {
    return (
        <>
            <header
                className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600"
            >
                <Logo />
            </header>

            <main
                className="flex"
            >
                <Video />
                <Sidebar />
            </main>
        </>
    )
}