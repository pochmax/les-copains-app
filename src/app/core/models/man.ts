import ObjectID from 'bson-objectid';
import { Types } from 'mongoose';
import { Sport } from './sport';
import { Woman } from './woman';

export interface Man {
  id: ObjectID;
  firstName: string;
  lastName: string;
  situation: string;
  girlfriend: Woman;
  dateOfBirth: Date;
  sport: Sport;
}
