import NavList from "shared/NavList"
import NavLogo from "shared/NavLogo"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "app/ui/card";
import { Button } from "app/ui/button";


function SideBar() {
    return (
        <div className="hidden  md:block relative border-r-muted border-r-2">
      <div className="flex h-full max-h-screen flex-col gap-2 fixed lg:w-[280px] md:w-[230px]">
                <NavLogo />
                <NavList />
                <div className="mt-auto p-4">
                    <Card>
                        <CardHeader className="p-2 pt-0 md:p-4">
                            <CardTitle>Upgrade to Pro</CardTitle>
                            <CardDescription>
                                Unlock all features and get unlimited access to our support team.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                            <Button size="sm" className="w-full">
                                Upgrade
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>

    )
}

export default SideBar