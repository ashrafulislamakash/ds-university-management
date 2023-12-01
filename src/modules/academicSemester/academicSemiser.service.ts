import { academicSemesterNameCodeMappper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.modal';

const createAcademicSemesterInDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMappper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterInDB,
};
