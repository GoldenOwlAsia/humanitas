import Root from '../navigation/Root';

export default (state, action) => {
    const newState = Root.router.getStateForAction(action, state);
    return newState || state;
};

