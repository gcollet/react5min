import React from 'react';

export default function TestComponent(props) {
  const { headline, count, showCount } = props;
  return (
    <div>
      <h1>React Test Component jolafrite</h1>
      <h2>{headline}</h2>
      { showCount ? <p>{count}</p> : null }
    </div>
  );
}
