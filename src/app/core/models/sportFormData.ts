import { Sport } from './sport';

export interface SportFormData {
  isUpdateMode: boolean;
  sportToUpdate?: Sport;
}
