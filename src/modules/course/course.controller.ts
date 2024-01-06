import httpStatus from 'http-status';
import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { CourseServices } from './course.service';

const crateCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.createCourseIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Course is created Successfully',
    data: result,
  });
});

const getALlCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.getALlCourseFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Course are Retrieved Successfully',
    data: result,
  });
});

const getSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.getSingleCourseFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Course are Retrieved Successfully',
    data: result,
  });
});

const updateCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.updateCourseIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Course are Updated Successfully',
    data: result,
  });
});

const deleteCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.deleteCourseFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Course are Deleted Successfully',
    data: result,
  });
});

export const CourseControllers = {
  crateCourse,
  getALlCourse,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};
