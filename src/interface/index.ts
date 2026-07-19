import { StaticImageData } from 'next/image';

export interface IBlogPost {
  tag: string;
  author: string;
  authorImage: string;
  publishDate: string;
  title: string;
  description: string;
  thumbnail: string;
  readTime: string;
  slug: string;
  content: string;
  featured?: boolean;
}

export interface IBlogContent {
  content: string;
  data: Partial<IBlogPost>;
  isEmpty: boolean;
  excerpt: string;
  orig: Buffer;
  language: string;
  matter: string;
}

export interface ICaseStudy {
  title: string;
  thumbnail: string;
  description: string;
  result: string;
  slug: string;
  content: string;
  before: string[];
  after: string[];
  keyFeatures: string[];
  userReview: {
    userName: string;
    userImage: string;
    userRole: string;
    reviewText: string;
  };
}

export interface IPosition {
  datePosted: string;
  expirationDate: string;
  location: string;
  offeredSalary: string;
  experience: string;
  qualification: string;
  employmentType: string[];
  jobSkills: string[];
  shortDescription: string;
  content: string;
  title: string;
  slug: string;
}

export interface IService {
  id: number;
  title: string;
  icon: string;
  description: string;
  image: string | StaticImageData;
  imageDark: string | StaticImageData;
  imgAlt: string;
  userReview: {
    name: string;
    image: string;
    reviewContent: string;
    userRole: string;
  };
  slug: string;
  content: string;
}

export interface ISocialLinks {
  behance?: string;
  dribbble?: string;
  facebook?: string;
  github?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}

export interface IContactInformation {
  email: string;
  phoneNumber: string;
}
export interface ITeamMember {
  name: string;
  role: string;
  userImg: string;
  contactInformation: IContactInformation;
  social: ISocialLinks;
  content: string;
  excerpt?: string;
  isEmpty?: boolean;
  slug: string;
  Content: string;
}

export interface FooterOneData {
  title: string;
  links: { label: string; href: string }[];
}

// customer markdown
export interface ICustomerTestimonial {
  image: string;
  name: string;
  role: string;
  description: string;
  rating: number;
  xLink: string;
}

export interface ICustomerSection {
  titleOne: string;
  titleTwo: string;
  description: string;
  testimonial?: ICustomerTestimonial;
}

export interface ICustomer {
  title: string;
  description: string;
  industry: string;
  product: string;
  service: string;
  solution: string;
  lightImage: string;
  darkImage: string;
  alt: string;
  detailsTitle: string;
  overview: ICustomerSection;
  problemBlock: ICustomerSection;
  solutionBlock: ICustomerSection;
  resultBlock: ICustomerSection;
  slug: string;
  content: string;
}

export interface LearnItem {
  id: string;
  text: string;
}

export interface KeyTakeWayItem {
  id: string;
  text: string;
}

export interface IWhitePaper {
  title: string;
  description: string;
  img: string | StaticImageData;
  featured?: boolean;
  badgeText: string;
  OverviewText: string;
  learn: LearnItem[];
  keyTakeWays: KeyTakeWayItem[];
  keyTakeWaysDescription: string;
  paperLink: string;
  slug: string;
  content: string;
}
