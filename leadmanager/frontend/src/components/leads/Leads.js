import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLeads, deleteLead } from "../../actions/leads";

export default function Leads() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeads());
  }, []);

  const leads = useSelector((state) => state.leads.leads);

  return (
    <>
      <h2>Leads</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Emai</th>
            <th>Message</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.mmessage}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(deleteLead(lead.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
