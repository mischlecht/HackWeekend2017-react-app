import * as ActionTypes from '../constants/action-types';
import {createStore} from 'redux';
import * as Models from '../constants/models';
import * as HomeReducers from '../home/reducers/home.reducers';
import * as ImagesReducers from '../images/reducers/images.reducers';

export let appInitialState = Models.AppState;

function app(previous = appInitialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_NAME:
            return HomeReducers.updateName(previous, action);

        /** Images Reducers **/
        case ActionTypes.IMAGES_VOTE_FOR_IMAGE:
            return ImagesReducers.voteForImage(previous, action);

        /** Default **/
        default:
            return previous;
  }
}

export const store = createStore(app, window.devToolsExtension && window.devToolsExtension());