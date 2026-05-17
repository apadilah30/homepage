export type TechLogoDef = {
  src: string;
  alt: string;
  docsUrl: string;
};

export const techLogos = {
  php: {
    src: "/logos/php.svg",
    alt: "PHP",
    docsUrl: "https://www.php.net/docs.php",
  },
  laravel: {
    src: "/logos/laravel.svg",
    alt: "Laravel",
    docsUrl: "https://laravel.com/docs",
  },
  go: {
    src: "/logos/go.svg",
    alt: "Go",
    docsUrl: "https://go.dev/doc/",
  },
  gin: {
    src: "/logos/gin.svg",
    alt: "Gin",
    docsUrl: "https://gin-gonic.com/docs/",
  },
  python: {
    src: "/logos/python.svg",
    alt: "Python",
    docsUrl: "https://docs.python.org/",
  },
  react: {
    src: "/logos/react.svg",
    alt: "React",
    docsUrl: "https://react.dev/",
  },
  nextjs: {
    src: "/logos/nextjs.svg",
    alt: "Next.js",
    docsUrl: "https://nextjs.org/docs",
  },
  postgresql: {
    src: "/logos/postgresql.svg",
    alt: "PostgreSQL",
    docsUrl: "https://www.postgresql.org/docs/",
  },
  docker: {
    src: "/logos/docker.svg",
    alt: "Docker",
    docsUrl: "https://docs.docker.com/",
  },
  nginx: {
    src: "/logos/nginx.svg",
    alt: "Nginx",
    docsUrl: "https://nginx.org/en/docs/",
  },
} as const satisfies Record<string, TechLogoDef>;
