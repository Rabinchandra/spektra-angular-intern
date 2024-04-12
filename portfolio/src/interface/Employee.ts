export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  image: string;
  portfolio: {
    bio: string;
    projects: {
      title: string;
      description: string;
      link: string;
    }[];
  };
}
