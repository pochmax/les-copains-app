import ObjectID from 'bson-objectid';
import { Types } from 'mongoose';
import { Man } from './man';
import { Sport } from './sport';

export interface Woman {
  id: ObjectID;
  firstName: string;
  lastName: string;
  situation: string;
  boyfriend: Man;
  photo: string;
  dateOfBirth: Date;
  sport: Sport;
}
