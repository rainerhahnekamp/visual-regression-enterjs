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
    'Darmstadt calls itself Wissenschaftsstadt or the City of Science. It is a German city, near Frankfurt, in the state of Hessen.',
  typeId: 1,
  durationInDays: 7,
  minCount: 5,
  maxCount: 15
};

function createStory(holiday: Partial<Holiday> = {}) {
  return () => ({ props: { holiday: { ...defaultHoliday, ...holiday } } });
}

export const Default = createStory();

export const Minimal = createStory({
  title: 'Darmstadt',
  teaser: 'Teaser',
  description: 'Description'
});

export const Overflown = createStory({
  title: 'A very long city name which does not fit within a line',
  teaser:
    'This is also a very long teaser text which surely does not fit within two lines. The 3rd line is hidden',
  description:
    'Eventually also an extremly long description where we simply have to limit the amount of lines to a maximum of three. We are still continuing here with some further text.'
});

export const SoldOut = createStory({ soldOut: true });

export const Empty = createStory({
  title: '',
  teaser: '',
  description: '',
  imageUrl: ''
});

export const TinyImage = createStory({
  imageUrl: '/assets/darmstadt-small.jpg'
});

export const OnSale = createStory({ onSale: true });

export const SaleAndSold = createStory({ onSale: true, soldOut: true });
