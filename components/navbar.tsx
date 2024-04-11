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
import { Input } from "./ui/input";

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
      <div className="flex justify-center gap-6">
        {subjects.map((subject) => {
          return (
            <Button
              className={`
              bg-secondary
              ${
                IsActive(subject.link, 2)
                  ? "font-bold bg-primary text-secondary"
                  : "font-medium bg-secondary text-primary"
              } hover:bg-primary hover:text-secondary`}
              key={subject.id}
            >
              <Link href={subject.link} legacyBehavior passHref>
                {subject.name}
              </Link>
            </Button>
          );
        })}
      </div>
    </>
  );
}

function ListNav() {
  return (
    <>
      <div className="flex flex-row justify-between">
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

        <Input type="search" placeholder="Tìm kiếm" className="w-72 mr-11" />

        <div className="flex flex-row gap-6">
          <ModeToggle />
          <Button className="w-[80px]">Login</Button>
          <Button className="w-[80px] bg-secondary">Sign up</Button>
        </div>
      </div>
    </>
  );
}

export default function Navbar() {
  return (
    <>
      <div className="border-b bg-background sticky w-full top-0">
        <div className="container">
          <header className="h-12 m-2">
            <ListNav />
          </header>
          {IsActive("/thu-vien", 1) && (
            <div className="pb-4">
              <ListSubjects />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
