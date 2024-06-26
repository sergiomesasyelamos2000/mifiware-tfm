import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';

export const getAuth = createSelector(
  fromFeature.getCoreState,
  (state) => state.auth
);
