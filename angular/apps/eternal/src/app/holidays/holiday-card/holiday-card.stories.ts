import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Meta, moduleMetadata } from '@storybook/angular';
import { Holiday } from '../holiday';
import { HolidayCardComponent } from './holiday-card.component';

export default {
  title: 'Eternal/HolidayCard',
  component: HolidayCardComponent,
  decorators: [moduleMetadata({ imports: [MatCardModule, MatButtonModule] })]
} as Meta;

const defaultHoliday: Holiday = {
  id: 1,
  title: 'Darmstadt',
  teaser: 'Welcome to the Science City',
  imageUrl: '/assets/darmstadt.jpg',
  description:
    'Darmstadt calls itself Wissenschaftsstadt or the City of Science. It is a German city, very near to Frankfurt, in the state of Hessen.',
  typeId: 1,
  durationInDays: 7,
  minCount: 5,
  maxCount: 15
};
