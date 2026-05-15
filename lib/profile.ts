export const profile = {
  name: "Bojan Elez",
  email: "belez911@gmail.com",
  location: "Kragujevac, Serbia",
  links: {
    linkedin: "https://www.linkedin.com/in/bojan-elez/",
    github: "https://github.com/bojanelez",
    map: "https://www.google.com/maps/@44.0261436,20.8969743,16z?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
  },
} as const;

export const profileHref = {
  email: `mailto:${profile.email}`,
  emailProjectInquiry: `mailto:${profile.email}?subject=Project Inquiry`,
} as const;