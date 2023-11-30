import httpStatus from 'http-status';
import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';

const createAcademicSemester = catchAsync(async (req, res) => {
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Semester is createe succesfully',
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
};
