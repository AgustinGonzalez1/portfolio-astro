export const socialLinks = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ricardoagustingonzalez/",
    icon: "/in.svg",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/AgustinGonzalez1",
    icon: "/github.svg",
  },
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/agustin.tsx/",
    icon: "/ig.svg",
  },
  email: {
    label: "Email",
    href: "mailto:agus.devvv@gmail.com",
    icon: "/email.svg",
  },
} as const;

export type SocialNetwork = keyof typeof socialLinks;
