import { Schema, model } from 'mongoose';
import { TFaculty } from './academicFaculty.interface';

const AcademicFacultySchema = new Schema<TFaculty>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },

  {
    timestamps: true,
  },
);

export const AcademicFaculty = model<TFaculty>(
  'AcademicFaculty',
  AcademicFacultySchema,
);
