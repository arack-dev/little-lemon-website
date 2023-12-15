import React, { useReducer } from "react";

const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return state;
        default:
            return state;
    }
};

const initializeTimes = () => {
    return [];
};

function Main({ children }) {
    const [availableTimes, dispatch] = useReducer(
        availableTimesReducer,
        [],
        initializeTimes
    );

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                availableTimes: availableTimes,
                dispatch: dispatch
            });
        }
        return child;
    });

    return <main>{childrenWithProps}</main>;
}

export default Main;