import validateRequest from '../../app/config/middlewares/validateRequest';

import { AcademicFacultyControllers } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';
import express from 'express';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationsSchema,
  ),
  AcademicFacultyControllers.createAcademicFaculty,
);

router.get(
  '/:facultyId',
  AcademicFacultyControllers.getSingleAcademicFaculties,
);

router.patch(
  '/:facultyId',
  validateRequest(
    AcademicFacultyValidation.updateAcademicFacultyValidationsSchema,
  ),
  AcademicFacultyControllers.updateAcademicFaculties,
);

router.get('/', AcademicFacultyControllers.getAllAcademicFaculties);

export const AcademicFacultyRoutes = router;
