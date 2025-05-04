"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, UsersRound, ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import "./globals.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      setIsSidebarOpen(window.innerWidth >= 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { name: "Agent Store", icon: "/user.png" },
    { name: "Credits and Billing", icon: "/credit.png" },
  ];

  const filterItems = [
    "Finance",
    "Messaging",
    "Trading",
    "Content Creation",
    "Marketing",
    "Social Media",
  ];

  const cardContent = [
    {
      image: "/x.png",
      tilte: "X Cold DM Agent",
      description: "automate/x-dm-outreach-agent",
      body: "Connect your X account, define your ICP, and let the agent auto-DM prospects daily with smart, human-like copy.",
      profileImage: "/teamProfile.png",
      teamName: "Clockworks",
    },
    {
      image: "/box.png",
      tilte: "X Cold DM Agent",
      description: "automate/x-dm-outreach-agent",
      body: "Connect your X account, define your ICP, and let the agent auto-DM prospects daily with smart, human-like copy.",
      profileImage: "/teamProfile.png",
      teamName: "Clockworks",
    },
    {
      image: "/linkedin.png",
      tilte: "X Cold DM Agent",
      description: "automate/x-dm-outreach-agent",
      body: "Connect your X account, define your ICP, and let the agent auto-DM prospects daily with smart, human-like copy.",
      profileImage: "/teamProfile.png",
      teamName: "Clockworks",
    },
    {
      image: "/insta.png",
      tilte: "X Cold DM Agent",
      description: "automate/x-dm-outreach-agent",
      body: "Connect your X account, define your ICP, and let the agent auto-DM prospects daily with smart, human-like copy.",
      profileImage: "/teamProfile.png",
      teamName: "Clockworks",
    },
    {
      image: "/maps.png",
      tilte: "X Cold DM Agent",
      description: "automate/x-dm-outreach-agent",
      body: "Connect your X account, define your ICP, and let the agent auto-DM prospects daily with smart, human-like copy.",
      profileImage: "/teamProfile.png",
      teamName: "Clockworks",
    },
    {
      image: "/x.png",
      tilte: "X Cold DM Agent",
      description: "automate/x-dm-outreach-agent",
      body: "Connect your X account, define your ICP, and let the agent auto-DM prospects daily with smart, human-like copy.",
      profileImage: "/teamProfile.png",
      teamName: "Clockworks",
    },
    {
      image: "/c.png",
      tilte: "X Cold DM Agent",
      description: "automate/x-dm-outreach-agent",
      body: "Connect your X account, define your ICP, and let the agent auto-DM prospects daily with smart, human-like copy.",
      profileImage: "/teamProfile.png",
      teamName: "Clockworks",
    },
    {
      image: "/c.png",
      tilte: "X Cold DM Agent",
      description: "automate/x-dm-outreach-agent",
      body: "Connect your X account, define your ICP, and let the agent auto-DM prospects daily with smart, human-like copy.",
      profileImage: "/teamProfile.png",
      teamName: "Clockworks",
    },
    {
      image: "/x.png",
      tilte: "X Cold DM Agent",
      description: "automate/x-dm-outreach-agent",
      body: "Connect your X account, define your ICP, and let the agent auto-DM prospects daily with smart, human-like copy.",
      profileImage: "/teamProfile.png",
      teamName: "Clockworks",
    },
  ];

  return (
    <>
      {/* App header */}
      <div className="bg-black border-b border-[#252525] h-[50px] flex items-center sticky top-0 z-50 w-full">
        <p className="text-white text-xl md:text-2xl font-bold mx-4 md:ml-10">
          AUTOMATE
        </p>
        {/* Mobile menu button in header for easy access */}
        {isSmallScreen && (
          <button
            onClick={toggleSidebar}
            className="p-1 ml-auto mr-4 text-white hover:bg-[#252525] rounded-md"
          >
            <Menu size={24} />
          </button>
        )}
      </div>

      <div className="flex h-[calc(100vh-50px)] bg-gray-100 dark:bg-black">
        {/* Overlay for mobile when sidebar is open */}
        {isSmallScreen && isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={toggleSidebar}
          />
        )}

        {/* Sidebar */}
        <div
          className={`
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          ${isSmallScreen ? "fixed z-30" : "relative"} 
          w-64 h-full dark:bg-black shadow-lg transition-transform duration-300 ease-in-out
        `}
        >
          {/* Sidebar Header with close button for mobile */}
          <div className="flex items-center justify-end px-4 py-2">
            {isSmallScreen && (
              <button
                onClick={toggleSidebar}
                className="p-1 rounded-md hover:bg-gray-700 text-white"
              >
                <X size={24} />
              </button>
            )}
          </div>

          {/* Sidebar Content */}
          <nav className="p-4">
            <ul className="space-y-2">
              <div className="flex mt-2 mb-6 cursor-pointer">
                <div className="flex items-center">
                  <Image
                    className="rounded-xl border border-[#212121]"
                    src="/profile.png"
                    width={36}
                    height={36}
                    alt="User profile"
                  />
                </div>
                <div className="p-1 flex-1">
                  <p className="text-[14px] font-semibold text-gray-100 pl-1">
                    Markus
                  </p>
                  <p className="text-[12px] text-gray-400 truncate pl-1">
                    imranshah10140@gmail.com
                  </p>
                </div>
                <div className="flex items-center">
                  <ChevronDown size={14} className="text-gray-400" />
                </div>
              </div>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="relative z-0 flex items-center py-[1px] h-[38px] border-t-2 hover:bg-gradient-to-r from-[#939393] via-transparent to-[#5A5A5A] animate-gradient-x rounded-r-sm"
                  >
                    <div className="flex hover:border-l-white hover:border-l-3 hover:bg-[#1D1D1D] mr-[1px] h-full w-full p-3 rounded-r-sm items-center">
                      <span className="mr-3">
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={16}
                          height={16}
                          className="text-[#909090]"
                        />
                      </span>
                      <span className="text-[#909090] hover:text-white text-[14px]">
                        {item.name}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col ">
          {/* Page Content */}
          <main className="flex-1 bg-gray-100 dark:bg-black border-l border-[#252525] overflow-y-auto scrollbar-hide">
            <div className="relative">
              {/* Grid background pattern */}
              <div className="relative  flex h-[8rem] sm:h-[10rem] w-full sm:w-[600px] items-center justify-center bg-white dark:bg-black">
                <div
                  className={cn(
                    "absolute inset-0",
                    "[background-size:20px_20px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                  )}
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
              </div>

              {/* Content area */}
              <div className=" absolute top-10 left-5 right-5  h-screen  z-10 px-4 sm:px-6 md:px-8 lg:px-12 pb-8">
                {/* Header section */}
                <div className="flex flex-col sm:flex-row sm:justify-between space-y-4 sm:space-y-0 sm:items-center py-4">
                  <div>
                    <h2 className="text-white text-xl sm:text-2xl">
                      Agents, for every industry
                    </h2>
                    <p className="text-[#888888] text-sm sm:text-base">
                      Find any agent who work for you 24/7
                    </p>
                  </div>
                  <div className="border-[0.75px] border-[#383838] rounded-xs flex h-[36px] w-full sm:w-[285px] items-center">
                    <div className="px-3 bg-[#191919] h-full flex items-center">
                      <Search className="text-white" size={20} />
                    </div>
                    <input
                      className="bg-[#191919] h-full w-full placeholder-[#696969] outline-none text-white px-2"
                      type="text"
                      placeholder="Search AI Agents"
                    />
                  </div>
                </div>

                {/* Filter section */}
                <div className="flex flex-wrap gap-2 my-4">
                  {filterItems.map((data, i) => (
                    <div
                      key={i}
                      className="relative px-[0.75px] rounded-md bg-gradient-to-b from-[#313131] via-[#B3B3B3] to-[#313131]"
                    >
                      <div className="bg-gradient-to-b from-[#242424] shadow-2xs to-[#161616] border-[#B3B3B3] text-[#B3B3B3] rounded-md px-3 py-1 text-xs sm:text-sm">
                        {data}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Card grid */}
                <div className="border border-[#252525] bg-[#101010] p-3 text-white mt-3 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cardContent.map((data, i) => (
                    <div
                      key={i}
                      className="animate-rotate-border  bg-conic/[from_var(--border-angle)] from-zinc-900 via-[#B3B3B3] to-zinc-900 p-[1.5px] rounded-sm"
                    >
                      <div className="p-4 bg-[#0A0A0A]  rounded-md shadow-[inset_0px_0px_7px_2px_rgba(255,255,255,0.08)] h-full">
                        <div className="flex">
                          <div className="mr-4 flex-shrink-0">
                            <Image
                              src={data.image}
                              alt="image"
                              width={35}
                              height={35}
                              className="rounded-full"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[14px] truncate">{data.tilte}</p>
                            <p className="text-[12px] text-zinc-400 truncate">
                              {data.description}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="mt-4 text-[14px] text-zinc-400 line-clamp-3">
                            {data.body}
                          </p>
                        </div>
                        <div className="flex justify-between mt-4">
                          <div className="flex items-center">
                            <div className="mr-2">
                              <Image
                                src={data.profileImage}
                                alt="img"
                                width={18}
                                height={18}
                                className="rounded-full"
                              />
                            </div>
                            <p className="text-[12px] truncate">
                              {data.teamName}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <div className="mr-2">
                              <UsersRound size={16} />
                            </div>
                            <p className="text-[12px]">3.3k</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
