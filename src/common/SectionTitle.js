
import React from 'react';

const SectionTitle = ({ children, title, source }) => (
  <div className="d-md-flex flex-wrap align-items-end">
    {children}
    <h2 style={{
      whiteSpace: 'nowrap',
    }}>
      {title || children}
    </h2>
    {source ? (
      <small
        className="text-truncate"
        style={{
          paddingBottom: '1.9em',
          paddingLeft: '1em',
        }}
      >
        <pre className="mb-0 text-muted">
          {source}
        </pre>
      </small>
    ) : null}
  </div>
);

export default SectionTitle;
