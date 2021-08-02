import { createAction, createReducer } from '@reduxjs/toolkit';
import * as I from 'src/store/interface';

// Action Types
export const GET_DOGS_DATA = 'GET_DOGS_DATA';
export const GET_DOGS_DATA_SUCCESS = 'GET_DOGS_DATA_SUCCESS';
export const GET_DOGS_DATA_FAIL = 'GET_DOGS_DATA_FAIL';
export const MORE_DOGS_DATA = 'MORE_DOGS_DATA';
export const SORTED_DOGS_DATA = 'SORTED_DOGS_DATA';
export const SORTED_DOGS_DATA_SUCCESS = 'SORTED_DOGS_DATA_SUCCESS';
export const FILTER_DOGS_DATA = 'FILTER_DOGS_DATA';
export const FILTER_DOGS_DATA_SUCCESS = 'FILTER_DOGS_DATA_SUCCESS';

// Action Creators
export const getDogsData = createAction(
  GET_DOGS_DATA,
  function prepare(queryData) {
    return {
      payload: {
        ...queryData,
        order: queryData ? queryData.order : 'Asc'
      }
    };
  }
);
export const getDogsDataSuccess = createAction(
  GET_DOGS_DATA_SUCCESS,
  function prepare(DogsData) {
    return {
      payload: {
        DogsData
      }
    };
  }
);

export const getDogsDataFail = createAction(GET_DOGS_DATA_FAIL);

export const moreDogsData = createAction(
  MORE_DOGS_DATA,
  function prepare(queryData) {
    return {
      payload: {
        queryData
      }
    };
  }
);

export const sortedDogsData = createAction(
  SORTED_DOGS_DATA,
  function prepare(queryData) {
    return {
      payload: {
        queryData
      }
    };
  }
);

export const sortedDogsDataSuccess = createAction(
  SORTED_DOGS_DATA_SUCCESS,
  function prepare(DogsData) {
    return {
      payload: {
        DogsData
      }
    };
  }
);

export const filterDogData = createAction(
  FILTER_DOGS_DATA,
  function prepare(queryData) {
    return {
      payload: {
        queryData
      }
    };
  }
);

export const filterDogsDataSuccess = createAction(
  FILTER_DOGS_DATA_SUCCESS,
  function prepare(DogsData) {
    return {
      payload: {
        DogsData
      }
    };
  }
);

// Initial State
const initialState: I.InitialDogsData = {
  isError: false,
  dogsData: [],
  filterData: { name: '', life_span: '', id: -1, image: { url: '' } }
};

// Reducers
const reducer = createReducer(initialState, {
  [getDogsData.type]: (state) => {
    state.isError = false;
  },
  [getDogsDataSuccess.type]: (state, action) => {
    state.dogsData = state.dogsData.concat(action.payload.DogsData.data);
  },
  [getDogsDataFail.type]: (state, action) => {
    state.isError = true;
  },
  [sortedDogsData.type]: (state) => {
    state.isError = false;
  },
  [sortedDogsDataSuccess.type]: (state, action) => {
    state.dogsData = action.payload.DogsData.data;
  },
  [filterDogsDataSuccess.type]: (state, action) => {
    state.filterData.name = action.payload.DogsData.data[0].breeds[0].name;
    state.filterData.life_span =
      action.payload.DogsData.data[0].breeds[0].life_span;
    state.filterData.id = action.payload.DogsData.data[0].id;
    state.filterData.image.url = action.payload.DogsData.data[0].url;
    state.dogsData = [state.filterData];
  }
});

export default reducer;
