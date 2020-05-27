import DISHES from '../shared/menu';
import COMMENTS  from '../shared/comments';
import PROMOTIONS from '../shared/promotions';
import LEADERS from '../shared/leader'

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};