import React from "react";
import { useHistory } from "react-router";

const ContactPage = () => {
  const history = useHistory();

  const handleClickButton = () => {
    history.push('/');
}
  return (
    <div>
      <h1>This is Contact Page!</h1>
      <button onClick={handleClickButton}>Return</button>
    </div>
  );
};

export default ContactPage;