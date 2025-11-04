export interface TeamMember {
  name: string;
  role: string;
  imageUrl?: string;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Danius Jean Backis",
    role: "Co-founder, CEO",
    // imageUrl: "/team/danius.jpg", // Optional: add actual image paths
  },
  {
    name: "Joris Jean Backis",
    role: "Junior Software Developer",
    // imageUrl: "/team/jane.jpg",
  },
  {
    name: "Nadjib Benlaldj",
    role: "Head of AI",
    // imageUrl: "/team/mike.jpg",
  },
  {
    name: "Evelina Molis",
    role: "Marketing Specialist",
    // imageUrl: "/team/sarah.jpg",
  },
  {
    name: "Aleksis",
    role: "Junior Software Developer",
    // imageUrl: "/team/alex.jpg",
  },
  {
    name: "Vygantas Skestenis",
    role: "Chief Business Development Officer",
    // imageUrl: "/team/emma.jpg",
  },
  {
    name: "Sviatoslav Zubrytskyi",
    role: "Junior Software Developer",
    // imageUrl: "/team/emma.jpg",
  },
];