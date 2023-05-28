import React from 'react';

const Empty = ({ children }) => {
  return (
    <div
      style={{ display: 'flex', height: '100vw', justifyContent: 'center', alignItems: 'center' }}
    >
      <span>
        <span aria-label="word">{children || '暂无数据...'}</span>
      </span>
    </div>
  );
};

export default Empty;
