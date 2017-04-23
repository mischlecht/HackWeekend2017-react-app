import * as Immutable from 'immutable';

import { InitialState as HomeInitialState } from '../home/constants/home.models';
import { InitialState as ImagesInitialState } from '../images/constants/images.models';

export const AppState = Immutable.Map({
    homeState: HomeInitialState,
    imagesState: ImagesInitialState,
});