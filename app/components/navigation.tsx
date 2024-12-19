'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const closeSheet = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between mx-auto px-4">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">{process.env.NEXT_PUBLIC_WEBSITE_NAME}</span>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <MobileNav closeSheet={closeSheet} />
            </SheetContent>
          </Sheet>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/sample" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50",
                    pathname === '/sample' && "bg-accent"
                  )}>
                    Sample
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/window-sticker-lookup" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50",
                    pathname === '/window-sticker-lookup' && "bg-accent"
                  )}>
                    Window Sticker
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/license-plate-lookup" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50",
                    pathname === '/license-plate-lookup' && "bg-accent"
                  )}>
                    License Plate Lookup
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50",
                    pathname === '/pricing' && "bg-accent"
                  )}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50",
                    pathname === '/contact' && "bg-accent"
                  )}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <nav className="flex items-center space-x-2">
          <Button asChild>
            <Link href="https://detailedvehiclehistory.com/members/login" rel="noopener noreferrer">
              Login
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

function MobileNav({ closeSheet }: { closeSheet: () => void }) {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <Link href="/sample" className="text-sm font-medium" onClick={closeSheet}>
        Sample
      </Link>
      <Link href="/window-sticker-lookup" className="text-sm font-medium" onClick={closeSheet}>
        Window Sticker
      </Link>
      <Link href="/license-plate-lookup" className="text-sm font-medium" onClick={closeSheet}>
        License Plate Lookup
      </Link>
      <Link href="/pricing" className="text-sm font-medium" onClick={closeSheet}>
        Pricing
      </Link>
      <Link href="/contact" className="text-sm font-medium" onClick={closeSheet}>
        Contact Us
      </Link>
      <Link href="https://detailedvehiclehistory.com/members/login" className="text-sm font-medium" onClick={closeSheet}>
        Login
      </Link>
      <Link href="https://detailedvehiclehistory.com/members/signup" className="text-sm font-medium" onClick={closeSheet}>
        Sign Up
      </Link>
    </div>
  )
}

