import Wait from "@/components/icons/wait";
import Image from "next/image";
import React from "react";

function BlogPage() {
  return (
    <section className="flex flex-col items-center justify-center mt-20 gap-2">
      <Wait />
      <h2 className="text-3xl font-bold">Not ready yet</h2>
    </section>
  );
}

export default BlogPage;
