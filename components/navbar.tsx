"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

const subjects: { id: number; link: string; name: string }[] = [
  { id: 1, link: "/home", name: "Home" },
  { id: 2, link: "/toan", name: "Toán" },
  { id: 3, link: "/ly", name: "Lý" },
  { id: 4, link: "/hoa", name: "Hóa" },
  { id: 5, link: "/tin", name: "Tin" },
];

export default function Navbar() {
  const pathname = "/" + usePathname().split("/")[1];
  const isActive = (path: string) => path === pathname;

  return (
    <>
      <div className="sticky top-0">
        <nav className="flex flex-wrap justify-center h-24 border-b bg-background md:px-6">
          <NavigationMenu>
            <NavigationMenuList>
              <div className="flex flex-wrap gap-8">
                {subjects.map((subject) => {
                  return (
                    <NavigationMenuItem key={subject.id}>
                      <Link href={subject.link} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={`${navigationMenuTriggerStyle()} ${
                            isActive(subject.link) ? "bg-muted" : ""
                          }
                            `}
                        >
                          <div
                            className={`mx-auto text-xl ${
                              isActive(subject.link)
                                ? "font-bold underline"
                                : "font-medium"
                            }`}
                          >
                            {subject.name}
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
                <ModeToggle />
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </>
  );
}
