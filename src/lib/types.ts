export type Category = {
  icon: string;
  name: string;
  link: string;
};

export type Course = {
  img: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  link: string;
};

export type HeadingPrimaryProps = {
  secondary?: string;
  primary: string;
};

export type ImageCardProps = {
  title: string;
  img: string;
  link?: string;
};

export type Service = {
  title: string;
  subtitle: string;
  img: string;
  link: string;
};
