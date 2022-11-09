import React, { useReducer } from "react";

function reducer(state: any, action: EventTarget & HTMLInputElement) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInput(initialForm: any) {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  return [state, onChange];
}
