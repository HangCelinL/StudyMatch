export type User = {
  name: string;
  email: string;
  id: string;
  age: string;
  likedUsers: User[];
  likedByUsers: User[];
  description: string;
  courses: string[];
};
