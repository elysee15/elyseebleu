import Heading from "@/components/ui/heading";
import { Project } from "@/lib/types";
import React from "react";
import Balancer from "react-wrap-balancer";
import ProjectCard from "./card";

const projects: Project[] = [
  {
    iconUrl:
      "https://vaspdirectory.dev/static/media/TRISA-GDS-black.6f14e660d60c0baa08a8.png",
    name: "TRISA Global Directory Service (client)",
    description: `TRISA’s Global Directory Service (GDS) is a network of vetted VASPs that can securely exchange Travel Rule compliance data with each other`,
    url: "https://vaspdirectory.dev/",
  },
  {
    iconUrl: "https://avatars.githubusercontent.com/u/54486864?s=48&v=4",
    name: "VASP directory (admin)",
    description: `TRISA’s Global Directory Service (GDS) is a network of vetted VASPs that can securely exchange Travel Rule compliance data with each other`,
    url: "https://admin.vaspdirectory.dev",
  },
  {
    iconUrl: "https://rotational.app/assets/rotational-2dd927dd.svg",
    name: "Ensign",
    description: `Build real-time data products without breaking Prod or learning DevOps.`,
    url: "https://rotational.app/",
  },
  {
    iconUrl:
      "https://www.ticket225.net/_next/image?url=%2Fassets%2Fimages%2Fticket225.png&w=96&q=75",
    name: "Ticket 225",
    description: `Build real-time data products without breaking Prod or learning DevOps.`,
    url: "https://www.ticket225.net/",
  },
  {
    iconUrl: "https://rotational.app/assets/rotational-2dd927dd.svg",
    name: "Whisper",
    description: `A Secret-Sharing Utility`,
    url: "https://whisper.rotational.dev/",
  },
  {
    iconUrl: "https://rotational.app/assets/rotational-2dd927dd.svg",
    name: "Whispr",
    description: `A Secret-Sharing Utility`,
    url: "https://whisper.rotational.dev/",
  },
];

function ProjectsPage() {
  return (
    <div className="space-y-20">
      <section>
        <Heading className="text-3xl">
          Things I worked on <span className="text-green-600">&&</span> Things
          I&apos;ve made trying to put my dent in the universe.
        </Heading>
        <p>
          <Balancer>
            I&apos;ve worked on tons of little projects over the years but these
            are the ones that I&apos;m most proud of. Many of them are
            open-source, so if you see something that piques your interest,
            check out the code and contribute if you have ideas for how it can
            be improved.
          </Balancer>
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard data={project} key={project.name + "__" + index} />
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;
