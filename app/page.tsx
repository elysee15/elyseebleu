import Github from "@/components/icons/github";
import Heading from "@/components/ui/heading";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <article className="">
      <section>
        <Heading>Developer, Curious and Team player.</Heading>
        <div className="space-y-2 pt-4">
          <p>
            <Balancer>
              Hey, I&apos;m Elysée Bleu. a mid-level Frontend developer at{" "}
              <Link
                href={"https://www.veone.net/"}
                target="_blank"
                className="font-bold hover:underline"
              >
                Veone
              </Link>
              , where I help to build robult and resilient apps.
            </Balancer>
          </p>
          <p>
            <Balancer>
              As you can probably tell, this website is still a work in
              progress.
            </Balancer>
          </p>
        </div>
      </section>
      <section className="mt-10 space-y-3">
        <h2 className="font-medium">Social medias</h2>
        <ul className="flex gap-2">
          <li className="flex justify-center items-center">
            <Link href={"mailto:elyseebleu1@gmail.com"} target="_blank">
              <Image
                src="/icons/google.svg"
                width={30}
                height={30}
                alt="Send email"
              />
            </Link>
          </li>
          <li className="flex justify-center items-center">
            <Link
              href={"https://www.linkedin.com/in/elysee15/"}
              target="_blank"
            >
              <Image
                src="/icons/linkedin.svg"
                width={30}
                height={30}
                alt="Send email"
              />
            </Link>
          </li>
          <li className="flex justify-center items-center">
            <Link href={"https://github.com/elysee15"} target="_blank">
              <Github />
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
