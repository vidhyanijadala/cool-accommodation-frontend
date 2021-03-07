import axios from 'axios';
import {
  BASE_API, MY_FAVOURITES_API,
  ACCOMMODATION_PROFILE_API,
  LOGIN_API,
  ALL_ACCOMMODATIONS_API,
} from '../../assets/samples/apis';
import {
  GET_ALL_FAVOURITES_ACTION,
  GET_MY_FAVOURITES_ACTION,
  GET_ACCOMMODATION_PROFILE,
  LOGIN_ACTION,
  LOGIN_CREDENTIAL_TYPING_ACTION,
  GET_ERRORS_ACTION,
  GET_ALL_ACCOMMODATIONS_ACTION,
} from './actionsTypes';

export const getAllFavouritesAction = () => async dispatch => {
  const favouriteAccomm = await axios.get(BASE_API);
  dispatch({ allFavourites: favouriteAccomm.data, type: GET_ALL_FAVOURITES_ACTION });
};

export const getAllAccommodations = token => async dispatch => {
  try {
    const accommodations = await axios.get(ALL_ACCOMMODATIONS_API,
      { headers: { token } });
    dispatch({ allAccommodations: accommodations.data, type: GET_ALL_ACCOMMODATIONS_ACTION });
  } catch (err) {
    dispatch({ error: err.response.data, type: GET_ERRORS_ACTION });
  }
};

export const getMyFavouritesAction = myId => async dispatch => {
  const favouriteAccomm = await axios.get(MY_FAVOURITES_API(myId));
  dispatch({ myFavourites: favouriteAccomm.data, type: GET_MY_FAVOURITES_ACTION });
};

export const getAccommodationProfile = accommId => async dispatch => {
  const accommProfile = await axios.get(ACCOMMODATION_PROFILE_API(accommId));
  dispatch({ accommodationProfile: accommProfile.data, type: GET_ACCOMMODATION_PROFILE });
};

export const loginAction = credentials => async dispatch => {
  try {
    const results = await axios.post(LOGIN_API, credentials);
    dispatch({ token: results.data, type: LOGIN_ACTION });
  } catch (err) {
    console.log({ err });
    dispatch({ error: err.response.data, type: GET_ERRORS_ACTION });
  }
};

export const loginCredentialTypingAction = credentials => ({
  credentials, type: LOGIN_CREDENTIAL_TYPING_ACTION,
});
