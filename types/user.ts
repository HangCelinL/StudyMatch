export type User = {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  birthday: Date;
  likedUsers: User[];
  likedByUsers: User[];
  description: string;
  courses: string[];
};
