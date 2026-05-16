import { useReducer, useCallback } from "react";

const ACTIONS = {
    CHANGE: "CHANGE",
    BLUR: "BLUR",
    SET_ERRORS: "SET_ERRORS",
    CLEAR_FIELD_ERROR: "CLEAR_FIELD_ERROR",
    SET_LOADING: "SET_LOADING",
    SET_ERROR: "SET_ERROR",
    RESET: "RESET",
    TOUCH_ALL: "TOUCH_ALL",
};

const createInitialState = (initialFormData) => ({
    formData: initialFormData,
    errors: {},
    touched: {},
    loading: false,
    error: null,
});

function reducer(state, action) {
    switch (action.type) {

        case ACTIONS.CHANGE:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.payload.name]: action.payload.value,
                },
            };

        case ACTIONS.BLUR:
            return {
                ...state,
                touched: {
                    ...state.touched,
                    [action.payload]: true,
                },
            };

        case ACTIONS.SET_ERRORS:
            return {
                ...state,
                errors: action.payload,
            };

        case ACTIONS.CLEAR_FIELD_ERROR: {
            const updated = { ...state.errors };
            delete updated[action.payload];

            return {
                ...state,
                errors: updated,
            };
        }

        case ACTIONS.SET_LOADING:
            return { ...state, loading: action.payload };

        case ACTIONS.SET_ERROR:
            return { ...state, error: action.payload };

        case ACTIONS.TOUCH_ALL:
            return {
                ...state,
                touched: Object.keys(state.formData).reduce((acc, k) => {
                    acc[k] = true;
                    return acc;
                }, {}),
            };

        case ACTIONS.RESET:
            return createInitialState(action.payload);

        default:
            return state;
    }
}

export default function useForm(initialFormData) {

    const [state, dispatch] = useReducer(
        reducer,
        initialFormData,
        createInitialState
    );

    const handleChange = useCallback((e) => {
        const { name, value, type, checked } = e.target;

        dispatch({
            type: ACTIONS.CHANGE,
            payload: {
                name,
                value: type === "checkbox" ? checked : value,
            },
        });

        dispatch({
            type: ACTIONS.CLEAR_FIELD_ERROR,
            payload: name,
        });

    }, []);

    const handleBlur = useCallback((e) => {
        dispatch({
            type: ACTIONS.BLUR,
            payload: e.target.name,
        });
    }, []);

    const setErrors = useCallback((errors) => {
        dispatch({ type: ACTIONS.SET_ERRORS, payload: errors });
    }, []);

    const setError = useCallback((msg) => {
        dispatch({ type: ACTIONS.SET_ERROR, payload: msg });
    }, []);

    const setLoading = useCallback((v) => {
        dispatch({ type: ACTIONS.SET_LOADING, payload: v });
    }, []);

    const touchAll = useCallback(() => {
        dispatch({ type: ACTIONS.TOUCH_ALL });
    }, []);

    const reset = useCallback((initial) => {
        dispatch({ type: ACTIONS.RESET, payload: initial });
    }, []);

    return {
        ...state,
        handleChange,
        handleBlur,
        setErrors,
        setError,
        setLoading,
        touchAll,
        reset,
    };
}