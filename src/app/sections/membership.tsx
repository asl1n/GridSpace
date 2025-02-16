"use client";

import React, { useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion } from "framer-motion";
import { FaBuilding, FaDesktop, FaExchangeAlt, FaUsers, FaTicketAlt, FaCalendarAlt } from "react-icons/fa";

const plans = [
  { title: "Private Office", icon: <FaBuilding />, price: "Rs.10,000/month", description: "A home for your business or a space to jam with your team? Our spacious private offices have room for 5!", link: "#" },
  { title: "Fixed Desk", icon: <FaDesktop />, price: "Rs.6,000/month", description: "Bring your screens and get tucked in. This desk is yours and only yours (unless of course you want to share)!", link: "#" },
  { title: "Flex Desk", icon: <FaExchangeAlt />, price: "Rs.5,500/month", description: "Need a desk from time to time? Or a central spot to host meetings? We got ya!", link: "#" },
];

const visits = [
  { title: "Meeting Room", icon: <FaUsers />, price: "Rs.1,500/day", description: "In town for a couple of days to meet with your remote team? Book our meeting room for up to 8 max!", link: "#" },
  { title: "Day Pass", icon: <FaTicketAlt />, price: "Rs.500/day", description: "Just you? Rs.500/day gets you a desk and access to all our amenities. Come hang out!", link: "#" },
  { title: "Week Pass", icon: <FaCalendarAlt />, price: "Rs.1,000/week", description: "Trying out Lisbon? Rs.1,000 gets you access from Monday through Sunday at any hour.", link: "#" },
];

const Membership = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [bookingItem, setBookingItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleBooking = () => {
    // if (!userLoggedIn) {
    //   alert("Please log in to book.");
    // } else {
    //   setBookingItem(item);
    //   setModalOpen(true);
    // }
    console.log("User logged");
  };

  return (
    <div className="bg-[#020617] min-h-screen text-white px-6 py-10 flex flex-col items-center lg:px-20">
      <div className="w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-left mb-6">Memberships</h2>
        <motion.div 
          className="w-full md:w-[90%] mx-auto"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
        >
          <HoverEffect items={plans} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" onItemClick={handleBooking} />
        </motion.div>
      </div>

      <div className="w-full mt-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-left mb-6">Just Visiting?</h2>
        <motion.div 
          className="w-full md:w-[90%] mx-auto"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <HoverEffect items={visits} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" onItemClick={handleBooking} />
        </motion.div>
      </div>

      {/* {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#020617] p-6 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Booking Confirmation</h2>
            <p>You are booking: <strong>{bookingItem?.title}</strong></p>
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => setModalOpen(false)}
            >
              Confirm
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Membership;