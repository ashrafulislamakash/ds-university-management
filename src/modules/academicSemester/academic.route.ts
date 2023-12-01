import express from 'express';
import validateRequest from '../../app/config/middlewares/validateRequest';

import { AcademicSemesterControllers } from './academic.controller';
import { AcademicSemestervalidations } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(AcademicSemestervalidations.createSemesterValidationSchema),
  AcademicSemesterControllers.createAcademicSemester,
);

router.get(
  '/:semesterId',
  AcademicSemesterControllers.getSingleAcademicSemester,
);

router.patch(
  '/:semesterId',
  validateRequest(
    AcademicSemestervalidations.updateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.updateAcademicSemester,
);

router.get('/', AcademicSemesterControllers.getAllAcademicSemesters);

export const AcademicSemesterRoutes = router;
