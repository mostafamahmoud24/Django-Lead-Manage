import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLead } from "../../actions/leads";

export default function Form() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addLead(name, email, message));
  };

  return (
    <div className="card card-body mt-4 mb-4">
      <h2>Add Lead</h2>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={(e) => setName((name = e.target.value))}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={(e) => setEmail((email = e.target.value))}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            className="form-control"
            type="text"
            name="message"
            onChange={(e) => setMessage((message = e.target.value))}
            value={message}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
