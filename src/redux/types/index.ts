export interface Recipe {
  _id: string;
  title: string;
  description: string;
  instructions: string;
  ingredients: string[];
  steps: string[];
  cookingTime: number;
  image: string;
  ratings: number;
  comments: string[];
  author: string;
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
}
