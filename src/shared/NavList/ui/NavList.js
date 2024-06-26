import {
  Home,
  Building2,
  Snail,
  ArrowUpDown,
  History,
  Wallet,
} from "lucide-react";
import "./navlist.css"

function NavList() {
  return (
    <nav className="grid items-start mt-3 px-2 text-xl font-medium lg:px-4 nav">
      <a
        href="/"
        className="flex items-center gap-3 rounded-lg px-3 py-3  transition-all hover:text-primary"
      >
        <Home className="h-4 w-4" />
        Home
      </a>

      <a
        href="/dashboard"
        className="flex items-center gap-3 rounded-lg px-3 py-3  transition-all hover:text-primary"
      >
        <Building2 className="h-4 w-4" />
        DashBoard
      </a>

      <a
        href="/"
        className="flex items-center gap-3 rounded-lg px-3 py-3  transition-all hover:text-primary"
      >
        <Snail className="h-4 w-4" />
        Assets
      </a>
      <a
        href="/"
        className="flex items-center gap-3 rounded-lg px-3 py-3  transition-all hover:text-primary"
      >
        <ArrowUpDown className="h-4 w-4" />
        Trade
      </a>
      <a
        href="/"
        className="flex items-center gap-3 rounded-lg px-3 py-3  transition-all hover:text-primary"
      >
        <History className="h-4 w-4" />
        Hystory
      </a>
      <a
        href="/"
        className="flex items-center gap-3 rounded-lg px-3 py-3  transition-all hover:text-primary"
      >
        <Wallet className="h-4 w-4" />
        Wallet
      </a>
    </nav>
  );
}

export default NavList;
