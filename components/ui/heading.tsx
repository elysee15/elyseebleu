import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import Balancer from "react-wrap-balancer";

function Heading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1 className={cn("text-4xl md:text-5xl font-bold mb-5 mt-16", className)}>
      <Balancer className="max-w-4xl tracking-wide">{children}</Balancer>
    </h1>
  );
}

export default Heading;
