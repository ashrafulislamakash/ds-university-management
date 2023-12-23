import { Types } from 'mongoose';

export type TPreRequisitesCourses = {
  course: Types.ObjectId;
  isDeleted: boolean;
};

export type TCourse = {
  title: string;
  prefix: string;
  code: number;
  credits: number;
  preRequisitesCourses: [];
};
