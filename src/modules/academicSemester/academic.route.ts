import express from 'express';
import { AcademicSemesterControllers } from './academic.controller';
const router = express.Router();

router.post(
  '/create-academic-semester',
  AcademicSemesterControllers.createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
