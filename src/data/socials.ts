import LinkedIn from "../assets/icons/linkedin.svg";
import GitHub from "../assets/icons/github.svg";
import Instagram from "../assets/icons/instagram.svg";
import YouTube from "../assets/icons/youtube.svg";
import Email from "../assets/icons/email.svg";

export const socialLinks = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ricardoagustingonzalez/",
    icon: LinkedIn,
  },
  github: {
    label: "GitHub",
    href: "https://github.com/AgustinGonzalez1",
    icon: GitHub,
  },
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/agustin.tsx/",
    icon: Instagram,
  },
  youtube: {
    label: "YouTube · MrCodigos",
    href: "https://www.youtube.com/@MrCodigos",
    icon: YouTube,
  },
  email: {
    label: "Email",
    href: "mailto:agus.devvv@gmail.com",
    icon: Email,
  },
} as const;

export type SocialNetwork = keyof typeof socialLinks;
