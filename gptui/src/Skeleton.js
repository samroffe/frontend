import React from 'react';
import { Skeleton } from '@mui/material';
import './App.css';

const SkeletonLoader = () => {
  return (
    <div>
      <div className="skeleton">
        <Skeleton variant="text" width={900} className="skeleton-message" sx={{ bgcolor: '#463cc9' }} />
        <Skeleton variant="text" width={900} className="skeleton-message" sx={{ bgcolor: '#463cc9' }} />
        <Skeleton variant="text" width={700} className="skeleton-message" sx={{ bgcolor: '#463cc9' }} />
      </div>
    </div>
  );
};

export default SkeletonLoader;