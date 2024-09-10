import Card from "@/components/about/Card";
import Navbar from "@/components/about/Navbar";
import SideMenu from "@/components/about/SideMenu";
import Steps from "@/components/about/Steps";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){
    return(
        <>
         <header className="p-4">
            <Navbar/>
         </header>
         <main>
            <div className="flex flex-row">
            <div className="basis-1/4 ms-10">
                <SideMenu/>
            </div>
            <div className="basis-1/4 ms-4">
                <Card/>
            </div>
            <div className="basis-1/4 ms-4">
                <Card/>
            </div>
            </div>
            <div>{children}</div>
         </main>
         <footer>
            <div className="">
                <Steps/>
            </div>
         </footer>
        </>
    )
}