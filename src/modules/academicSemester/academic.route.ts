import express from 'express';
import validateRequest from '../../app/config/middlewares/validateRequest';
import { AcsdemicSemestervalidations } from './academicSemester.validation';
import { AcademicSemesterControllers } from './academic.controller';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(AcsdemicSemestervalidations.createSemesterValidationSchema),
  AcademicSemesterControllers.createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
