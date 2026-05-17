import Image from "next/image";
import type { TechLogoDef } from "@/components/tech-logos";

type TechLogoProps = {
  logo: TechLogoDef;
  size?: "sm" | "md" | "lg";
};

const sizes = { sm: 36, md: 44, lg: 52 } as const;

export function TechLogo({ logo, size = "md" }: TechLogoProps) {
  const dim = sizes[size];
  const pad = size === "lg" ? "p-3" : size === "md" ? "p-2.5" : "p-2";

  return (
    <a
      href={logo.docsUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={`${logo.alt} documentation`}
      className={`logo-pill ${pad} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400`}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={dim}
        height={dim}
        className="object-contain"
        unoptimized
      />
    </a>
  );
}
