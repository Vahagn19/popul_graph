import { Sheet, SheetTitle, SheetTrigger, SheetContent } from "../../../app/ui/sheet"
import { Button } from "../../../app/ui/button"
import NavLogo from "../../../shared/NavLogo"
import NavList from "../../../shared/NavList"
import { Menu } from "lucide-react"
import Changetheme from "../../../app/styles/theme/Changetheme"

function Header() {
    return (
        <header className="flex h-[60px] items-center gap-4 border-b  lg:h-[60px] md:px-4 md:py-2 lg:px-6 lg:py-4">
           

            <Sheet >
                <div className="flex  items-center w-full justify-between p-3">
                    <SheetTitle>
                        <div className=" md:hidden">
                            <NavLogo />
                             </div>
                    </SheetTitle>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 and w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                </div>
                <SheetContent style={{ background: "rgb(3 7 18)" }} side="left" className="flex flex-col">
                    <NavList />
                </SheetContent>
            </Sheet>
            <div className="mr-2">  <Changetheme/></div>
        </header>



    )
}

export default Header