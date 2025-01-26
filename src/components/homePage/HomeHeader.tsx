import React from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { PiHandbagBold } from "react-icons/pi";
import SearchBar from './SearchBar'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RiArrowDropDownLine } from "react-icons/ri";


const HomeHeader = () => {
  return (
    <header className="max-w-[1320px] mx-auto bg-[#0D0D0D] text-white z-50 sticky">
      <h1 className="text-2xl font-bold w-full text-center pt-8"><span className="text-[#FF9F0D]">Food</span>tuck</h1>
      <div className="wrapper flex justify-between items-center py-4 lg:px-3">

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center text-white">
          <Link href={"/"} className="text-[#FF9F0D] underline hover:text-[#bd832c]"> Home</Link>
          <Link href={"/menu"} className="hover:text-[#FF9F0D]">Menu</Link>
          <Link href={"/blog-page"} className="hover:text-[#FF9F0D]">Blog</Link>
          {/* drop down menu code */}
          <DropdownMenu >
            <DropdownMenuTrigger className='text-white'>Pages<RiArrowDropDownLine className="inline-block" /></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className='bg-white hover:text-[#FF9F0D]'>Other Pages</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='bg-white '><Link href='/checkout'>Check Out</Link></DropdownMenuItem>
              <DropdownMenuItem className='bg-white '><Link href='/our-chef'>Our Chefs</Link></DropdownMenuItem>
              <DropdownMenuItem className='bg-white hover:bg-white '><Link href='/FAQ'>FAQ</Link></DropdownMenuItem>
              <DropdownMenuItem className='bg-white '><Link href='/signin'>Sign In</Link></DropdownMenuItem>
              <DropdownMenuItem className='bg-white '><Link href='/signup'>Sign Up</Link></DropdownMenuItem>
              <DropdownMenuItem className='bg-white '><Link href='/404Error'>404 Error</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href={"/about"} className="hover:text-[#FF9F0D]">About</Link>
          <Link href={"/shop"} className="hover:text-[#FF9F0D]">Shop</Link>
          <Link href={"/contact"} className="hover:text-[#FF9F0D]">Contact</Link>
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <HiMenu className="text-2xl cursor-pointer text-white " />
            </SheetTrigger>
            <SheetContent side="left" className="w-64 bg-gray-900">
              <SheetHeader>
                <SheetTitle className="text-white font-bold">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col space-y-4">
                <Link href={"/"} className="text-white text-lg">Home</Link>
                <Link href={"/menu"} className="text-white text-lg">Menu</Link>
                <Link href={"/blog-page"} className="text-white text-lg">Blog </Link>
                {/* drop down menu code */}
                <DropdownMenu >
                  <DropdownMenuTrigger className='text-white'>Pages<RiArrowDropDownLine className="inline-block" /></DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel className='bg-white hover:text-[#FF9F0D]'>Other Pages</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className='bg-white '><Link href='/checkout'>Check Out</Link></DropdownMenuItem>
                    <DropdownMenuItem className='bg-white '><Link href='/our-chef'>Our Chefs</Link></DropdownMenuItem>
                    <DropdownMenuItem className='bg-white hover:bg-white '><Link href='/FAQ'>FAQ</Link></DropdownMenuItem>
                    <DropdownMenuItem className='bg-white '><Link href='/signin'>Sign In</Link></DropdownMenuItem>
                    <DropdownMenuItem className='bg-white '><Link href='/signup'>Sign Up</Link></DropdownMenuItem>
                    <DropdownMenuItem className='bg-white '><Link href='/404Error'>404 Error</Link></DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link href={"/about"} className="text-white text-lg">About</Link>
                <Link href={"/shop"} className="text-white text-lg">Shop</Link>
                <Link href={"/contact"} className="text-white text-lg">Contact </Link>
              </nav>

              {/* Additional Icons */}
              <div className="mt-6 flex space-x-4">
                <IoSearch className="text-xl text-white" />
                <Link href='/shopping-cart'><PiHandbagBold className="text-xl text-white" /></Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Search and Icons */}
        {/* <div className="hidden md:flex items-center space-x-6">
          <div className="hidden lg:flex items-center rounded-md px-3 py-2 space-x-4">
            <input
              type="search"
              placeholder="Search..."
              className="rounded-full h-[35px] w-[310px] border border-[#FF9F0D] bg-black text-white pl-3"
            />
            <IoSearch className="-translate-x-12 bg-black text-white" />
            <Link href="/shopping-cart">
              <PiHandbagBold className="-translate-x-8 bg-black text-white" />
            </Link>
          </div>
        </div> */}

        {/* search bar functionality code according to schema*/}
          <SearchBar/>
      </div>
    </header>
  );
};
export default HomeHeader;




