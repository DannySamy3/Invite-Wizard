"use client";
import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import InnerPage from "@/components/InnerPage/InnerPage";
import CardDetails from "@/components/InnerPage/CardDetails";
import FirstCard from "@/components/CardTemplates/FirstCard";
import { PDFViewer } from "@react-pdf/renderer";


const page = () => {
  return (
    <div className="">
      {/* <HeroSection />  */}
       <InnerPage />
      {/* <CardDetails/> */}
      {/* <PDFViewer className=" w-full h-screen">
        <FirstCard />
      </PDFViewer> */}
    </div>
  );
};

export default page;
