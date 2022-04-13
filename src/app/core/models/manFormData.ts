import { Man } from './man';

export interface ManFormData {
  isUpdateMode: boolean;
  manToUpdate?: Man;
}
