export interface Project {
  title: string;
  date: string;
  features?: string[] | null;
  description: string;
  images: string[];
  deploymentLink?: string;
  githubLink: string;
  tech: string;
//   frontendTech: string;
//   backendTech: string;
  tasks?: string[];
  skills?: string[];
  plans?: string[];
}
