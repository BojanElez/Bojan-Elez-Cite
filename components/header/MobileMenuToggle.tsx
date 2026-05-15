"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";
import { navItems } from "./navItems";

export default function MobileMenuToggle() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        className="mobile-menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {open && (
        <MobileMenu items={navItems} onNavigate={() => setOpen(false)} />
      )}
    </>
  );
}
