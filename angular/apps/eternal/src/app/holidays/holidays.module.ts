import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HolidaysEffects } from './+state/holidays.effects';
import { holidaysFeatureKey, holidaysReducer } from './+state/holidays.reducer';
import { AddressGetterComponent } from './address-getter/address-getter.component';
import { HolidayCardComponent } from './holiday-card/holiday-card.component';
import { HolidaysComponent } from './holidays/holidays.component';

@NgModule({
  declarations: [HolidaysComponent, HolidayCardComponent, AddressGetterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HolidaysComponent
      }
    ]),
    StoreModule.forFeature(holidaysFeatureKey, holidaysReducer),
    EffectsModule.forFeature([HolidaysEffects]),
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class HolidaysModule {}
