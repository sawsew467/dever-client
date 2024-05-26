export interface UserInfo {
  MSSV: string;
  avatar: string;
  createdAt: string;
  dateJoin: string;
  description: string;
  dob: string;
  email: string;
  firstname: string;
  gen: number;
  hometown: string;
  isAdmin: boolean;
  isExcellent: boolean;
  job: string;
  lastname: string;
  nickname: string;
  phone: string;
  school: string;
  slug: string;
  updatedAt: string;
  workplace: string;
  __v: number;
  _id: string;

  departments: UserEnum[];
  favourites: string[];
  skills: string[];
  majorId: UserEnum;
  positionId: UserEnum;
  socials: Social[];
}

export interface UserEnum {
  constant: string;
  createdAt: string;
  name: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface Social {
  socialId: UserEnum;
  url: string;
  _id: string;
}
