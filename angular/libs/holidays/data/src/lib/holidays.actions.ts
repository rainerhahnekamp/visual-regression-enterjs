import { Holiday } from '@eternal/holidays/model';
import { createAction, props } from '@ngrx/store';

const find = createAction('[Holidays] Find');
const findSuccess = createAction('[Holidays] Find Success', props<{ holidays: Holiday[] }>());

const sendBrochure = createAction('[Holidays] Send Brochure', props<{ holiday: Holiday }>());
const sendBrochureSuccess = createAction('[Holidays] Send Brochure Successful');

export const holidaysActions = {
  find,
  findSuccess,
  sendBrochure,
  sendBrochureSuccess
};
