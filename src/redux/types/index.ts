export interface Recipe {
  _id: string;
  title: string;
  description: string;
  instructions: string;
  ingredients: string[];
  steps: string[];
  cookingTime: number;
  image: string;
  ratings: { userId: string; rating: number }[];
  comments: string[];
  author: string;
  isPublished?: boolean;
  createdBy?: string;
  isDeleted?: boolean;
  upvotes: number;
  downvotes: number;
  averageRatings: number;
}

export interface TUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  password?: string;
  photoUrl?: string;
  role?: string;
  bio?: string;
  recipes: Recipe[];
  followers: string[];
  following: string[];
  isPremiumMember: boolean;
  user?: TUser;
  curretUser?: TUser;
  data: TUser;
  isBlocked?: boolean;
}
export type TUsersResponse = {
  data: TUser;
};

export interface Comment {
  userId: string;
  username: string;
  content: string;
  date: string;
}
