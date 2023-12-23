import { z } from 'zod';

const PreRequisitesCoursesSchema = z.object({
  course: z.string(),
  isDeleted: z.boolean().optional(),
});

const createCourseValidationsSchema = z.object({
  body: z.object({
    title: z.string(),
    prefix: z.string(),
    code: z.number(),
    credits: z.number(),
    preRequisitesCourses: z.array(PreRequisitesCoursesSchema),
  }),
});
const updateCourseValidationsSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    prefix: z.string().optional(),
    code: z.number().optional(),
    credits: z.number().optional(),
    preRequisitesCourses: z.array(PreRequisitesCoursesSchema),
  }),
});

export const CourseValidations = {
  createCourseValidationsSchema,
  updateCourseValidationsSchema,
};
