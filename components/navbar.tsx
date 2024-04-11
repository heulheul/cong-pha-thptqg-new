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
  { id: 1, link: "/thu-vien/toan", name: "Toán" },
  { id: 2, link: "/thu-vien/ly", name: "Lý" },
  { id: 3, link: "/thu-vien/hoa", name: "Hóa" },
  { id: 4, link: "/thu-vien/tin", name: "Tin" },
];

const navItems: { id: number; link: string; name: string }[] = [
  { id: 1, link: "/dashboard", name: "Trang chính" },
  { id: 2, link: "/thu-vien", name: "Thư viện" },
];

const IsActive = (path: string, till: number) => {
  const pathname = usePathname().split("/");
  // console.log(path.split("/").slice(-1));
  // console.log(pathname.slice(-till));

  return path.split("/").slice(-1)[0] === pathname[till];
};

function ListSubjects() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="space-x-6">
          {subjects.map((subject) => {
            return (
              <NavigationMenuItem key={subject.id} className="">
                <Link href={subject.link} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${
                      IsActive(subject.link, 2) ? "bg-muted" : ""
                    }`}
                  >
                    <p
                      className={`mx-auto text-xl ${
                        IsActive(subject.link, 2) ? "font-bold" : "font-medium"
                      }`}
                    >
                      {subject.name}
                    </p>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

function ListNav() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="space-x-6">
          {navItems.map((item) => {
            return (
              <NavigationMenuItem key={item.id} className="">
                <Link href={item.link} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${
                      IsActive(item.link, 1) ? "bg-muted" : ""
                    }`}
                  >
                    <p
                      className={`mx-auto text-xl ${
                        IsActive(item.link, 1) ? "font-bold" : "font-medium"
                      }`}
                    >
                      {item.name}
                    </p>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export default function Navbar() {
  return (
    <>
      <div className="border-b">
        <div className="container">
          <nav className="h-14 m-2 flex flex-wrap">
            <ListNav />
          </nav>
          {IsActive("/thu-vien", 1) && (
            <div className="h-12 flex flex-wrap justify-center pb-2">
              <ListSubjects />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
