import React from "react";
import Card from "./Card";

const Testimonials = () => {
  return (
    <div className="flex-1 bg-[#8F25F9] flex items-center justify-center overflow-hidden">
      <div className="flex slide">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* Duplicate cards to create the infinite effect */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Testimonials;
