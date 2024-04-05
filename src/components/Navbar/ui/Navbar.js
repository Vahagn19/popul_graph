import {
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Bell,
  ShoppingCart,
  Users,
} from "lucide-react";
import Graph from "../../Graph";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Card,CardHeader,CardTitle,CardDescription,CardContent } from "../../ui/card";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import CryptoCurse from "../../CryptoCurse";

export function Navbar() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          {/* <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">   Header Icon Part
            <a href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </a>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div> */}
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <a
                href="?local"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </a>
            </nav>
          </div>
          {/* <div className="mt-auto p-4">               Sidebar Boottom part
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <a
                  href="545"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </a>
         
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <Graph />
        <div className="flex m-2 ml-3">
        <CryptoCurse/>
    
        </div>
      
      </div>
    </div>
  );
}

export default Navbar;















// <a
// href="#"
// className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
// >
// <ShoppingCart className="h-5 w-5" />
// Orders
// <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
//   6
// </Badge>
// </a>
// <a
// href="#"
// className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
// >
// <Package className="h-5 w-5" />
// Products
// </a>
// <a
// href="#"
// className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
// >
// <Users className="h-5 w-5" />
// Customers
// </a>
// <a
// href="#"
// className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
// >
// <LineChart className="h-5 w-5" />
// Analytics
// </a>