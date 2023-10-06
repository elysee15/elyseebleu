import React from "react";
import Heading from "@/components/ui/heading";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

function AboutPage() {
  return (
    <article className="py-16">
      <Heading>I&apos;m Elysée Bleu. I&apos;m a Frontend developer</Heading>
      <p>I&apos;ve over 3 years of professional experience</p>
    </article>
  );
}

export default AboutPage;
