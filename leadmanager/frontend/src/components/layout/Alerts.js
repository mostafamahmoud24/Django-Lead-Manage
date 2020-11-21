import React, { useEffect, Fragment } from "react";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";

const Alerts = () => {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.errors);

  const alert = useAlert();

  useEffect(() => {
    alert.show("IT WORKS");
  }, []);

  return <Fragment />;
};

export default Alerts;
