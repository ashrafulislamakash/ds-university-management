import config from '../../app/config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // crate a User object
  const userData: Partial<TUser> = {};

  // if password is not given
  userData.password = password || (config.default_password as string);

  // set student role
  userData.role = 'student';
     
  // set manually genarated
  userData.id = '202410010';

  //create a user
  const newUser = await User.create(userData);

  // cratea a student
  if (Object.keys(newUser).length) {
    // set id , _id as a user

    studentData.id = newUser.id;
    studentData.user = newUser._id; // reference _id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
