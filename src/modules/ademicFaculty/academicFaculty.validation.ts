import { z } from 'zod';

const createAcademicFacultyValidationsSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'AcademicFaculty must be string',
    }),
  }),
});

const updateAcademicFacultyValidationsSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'AcademicFaculty must be string',
    }),
  }),
});

export const AcademicFacultyValidation = {
  createAcademicFacultyValidationsSchema,
  updateAcademicFacultyValidationsSchema,
};
