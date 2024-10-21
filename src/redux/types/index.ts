export interface Recipe {
    _id: string;
    title: string;
    description: string;
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
    password?: string;
    profilePicture?: string;
    bio?: string;
    recipes: Recipe[];
    followers: string[];
    following: string[];
    isPremiumMember: boolean;
  }
                    