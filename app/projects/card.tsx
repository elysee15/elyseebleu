import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Project } from "@/lib/types";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Balancer from "react-wrap-balancer";

function ProjectCard({ data }: { data: Project }) {
  return (
    <Link
      href={data?.url}
      className="flex group gap-2 text-base"
      target="_blank"
    >
      <Card className="w-[350px] flex flex-col justify-between border-none shadow-none group-hover:shadow-inner transition duration-300">
        <CardHeader>
          <CardTitle className="flex flex-col">
            <span className="block w-10 h-16 relative">
              {data?.iconUrl ? (
                <Image
                  src={data?.iconUrl}
                  alt={data?.name}
                  fill
                  className="object-contain aspect-video"
                />
              ) : null}
            </span>
            <span className="text-lg tracking-wide">
              <Balancer>{data?.name ?? "-"}</Balancer>
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm">{data?.description}</CardContent>
        <CardFooter className="flex justify-between mt-auto">
          <span className="flex gap-2 items-center text-sm text-gray-400 group-hover:text-green-600 transition duration-300">
            <LinkIcon width={16} height={16} /> {data?.url}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default ProjectCard;
