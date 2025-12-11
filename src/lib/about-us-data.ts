export interface TeamMember {
  name: string;
  role: string;
  imageUrl?: string;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Danius",
    role: "Co-founder, CEO",
    imageUrl: "/resources/danius.png",
  },
  {
    name: "Joris",
    role: "Junior Software Developer",
    imageUrl: "/resources/joris.png",
  },
  {
    name: "Nadjib",
    role: "Head of AI",
    imageUrl: "/resources/nadjib.png",
  },
  {
    name: "Evelina",
    role: "Marketing Specialist",
    imageUrl: "/resources/evelina.png",
  },
  {
    name: "Aleksis",
    role: "Junior Software Developer",
    // imageUrl: "/team/alex.jpg",
  },
  {
    name: "Sviatoslav",
    role: "Junior Software Developer",
    // imageUrl: "/team/emma.jpg",
  },
  {
    name: "Roman",
    role: "Junior Data Scientist",
    // imageUrl: "/team/emma.jpg",
  },
  {
    name: "Gertruda",
    role: "Junior Software Developer",
    // imageUrl: "/team/emma.jpg",
  },
  {
    name: "Saule",
    role: "Sales Representative",
    // imageUrl: "/team/emma.jpg",
  },
];