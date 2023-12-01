import config from '../../app/config';
import { AcademicSemester } from '../academicSemester/academicSemester.modal';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utills';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // crate a User object
  const userData: Partial<TUser> = {};

  // if password is not given
  userData.password = password || (config.default_password as string);

  // set student role
  userData.role = 'student';

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  //set  generated id
  userData.id = await generateStudentId(admissionSemester);

  //create a user
  const newUser = await User.create(userData);

  // cratea a student
  if (Object.keys(newUser).length) {
    // set id , _id as a user

    payload.id = newUser.id;
    payload.user = newUser._id; // reference _id

    const newStudent = await Student.create(payload);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
