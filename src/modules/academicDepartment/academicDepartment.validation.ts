import { z } from 'zod';

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'academic faculty must be string',
    }),
    AcademicFaculty: z.string({
      invalid_type_error: 'academic faculty must be string',
      required_error: 'Faculty is Required',
    }),
  }),
});

const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'academic faculty must be string',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'academic faculty must be string',
        required_error: 'Faculty is Required',
      })
      .optional(),
  }),
});

export const AcademicDepartmentValidation = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
