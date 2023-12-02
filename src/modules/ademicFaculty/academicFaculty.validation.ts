import { z } from 'zod';

const createAcademicFacultyValidationsSchema = z.object({
  name: z.string({
    invalid_type_error: 'AcademicFaculty must be string',
  }),
});

const updateAcademicFacultyValidationsSchema = z.object({
  name: z.string({
    invalid_type_error: 'AcademicFaculty must be string',
  }),
});

export const AcademicFacultyValidation = {
  createAcademicFacultyValidationsSchema,
  updateAcademicFacultyValidationsSchema,
};
