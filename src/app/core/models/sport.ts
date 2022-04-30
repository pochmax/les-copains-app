import { Types } from 'mongoose';
import { Man } from './man';
import { Woman } from './woman';

export interface Sport {
  id: string;
  name: string;
  desc: string;
  men: Man;
  women: Woman;
}
