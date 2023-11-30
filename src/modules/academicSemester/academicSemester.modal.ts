import { Schema, model } from 'mongoose';
import {
  TAcademicSemester,
} from './academicSemester.interface';
import { AcademicSemesterCode, AcademicSemesterName, Months } from './academicSemester.constant';

const acdemicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterName,
    },

    year: {
      type: Date,
      required: true,
    },

    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },

    startMonth: {
      Types: String,
      required: true,
      enum: Months,
    },

    endMonth: {
      Types: String,
      required: true,
      enum: Months,
    },
  },
  {
    timestamps: true,
  },
);

export const AcdemicSemsterSchema = model<TAcademicSemester>(
  'Academicsemister',
  acdemicSemesterSchema,
);
