import { useState } from "react";

const useForm = (initState) => {
  const [state, setState] = useState(initState);

  const onChangeInfo = (value, key) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  const setForm = (form) => {
    setState({
      ...state,
      ...form,
    });
  };
 
  const resetForm = () => {
    setForm(initState);
  };

  return {
    ...state,
    form: state,
    onChangeInfo,
    setForm,
    resetForm,
  };
};

export default useForm;
