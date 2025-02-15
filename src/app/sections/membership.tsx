"use client";

import React, { useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const plans = [
  {
    title: "🏠 Private Office",
    price: "Rs.10,000/month",
    description:
      "A home for your business or a space to jam with your team? Our spacious private offices have room for 5!",
    link: "#",
  },
  {
    title: "🖥 Fixed Desk",
    price: "Rs.6,000/month",
    description:
      "Bring your screens and get tucked in. This desk is yours and only yours (unless of course you want to share)!",
    link: "#",
  },
  {
    title: "🔄 Flex Desk",
    price: "Rs.5,500/month",
    description: "Need a desk from time to time? Or a central spot to host meetings? We got ya!",
    link: "#",
  },
];

const visits = [
  {
    title: "🏢 Meeting Room",
    price: "Rs.1,500/day",
    description:
      "In town for a couple of days to meet with your remote team? Book our meeting room for up to 8 max!",
    link: "#",
  },
  {
    title: "🎟 Day Pass",
    price: "Rs.500/day",
    description: "Just you? Rs.500/day gets you a desk and access to all our amenities. Come hang out!",
    link: "#",
  },
  {
    title: "📅 Week Pass",
    price: "Rs.1,000/week",
    description: "Trying out Lisbon? Rs.1,000 gets you access from Monday through Sunday at any hour.",
    link: "#",
  },
];

const Membership = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleBooking = (title: string) => {
    if (!userLoggedIn) {
      alert("Please log in to book.");
    } else {
      alert(`Booking placeholder for ${title}`);
    }
  };

  return (
    <div className="bg-[#020617] min-h-screen text-white px-6 py-10 flex flex-col items-center lg:px-20">
      {/* Membership Section */}
      <div className="w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-left mb-6">Memberships</h2>
        <div className="w-full md:w-[90%] mx-auto">
          <HoverEffect items={plans} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" />
        </div>
      </div>

      {/* Just Visiting Section */}
      <div className="w-full mt-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-left mb-6">Just Visiting?</h2>
        <div className="w-full md:w-[90%] mx-auto">
          <HoverEffect items={visits} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" />
        </div>
      </div>
    </div>
  );
};

export default Membership;