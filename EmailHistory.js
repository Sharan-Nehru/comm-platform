import React, { useEffect, useState } from 'react';
import { getEmailHistory } from '../api';

const EmailHistory = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      const { data } = await getEmailHistory();
      setEmails(data);
    };
    fetchEmails();
  }, []);

  return (
    <div>
      <h1>Email History</h1>
      <ul>
        {emails.map(email => (
          <li key={email._id}>
            <h3>{email.subject}</h3>
            <p>{email.body}</p>
            <p>To: {email.to}</p>
            <p>Sent at: {new Date(email.sentAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailHistory;
