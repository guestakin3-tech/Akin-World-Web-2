import React from 'react';

function Updates({ updates }) {
  return (
    <section>
      <h2>Latest Updates</h2>
      <ul>
        {updates.map(update => (
          <li key={update.id}>
            <strong>{update.type.toUpperCase()}:</strong> {update.title} - <em>{update.time}</em>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Updates;
