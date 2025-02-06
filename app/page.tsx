"use client";

import Arrivals from "./_components/Arrivals";
import Hero from "./_components/Hero";
import Selling from "./_components/Selling";
import Browse from "./_components/Browse";
import Customers from "./_components/customers";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Arrivals />
      <Selling />
      <Browse />
      <Customers />
      <Footer/>
    </div>
  );
}
