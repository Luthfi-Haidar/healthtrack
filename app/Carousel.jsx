'use client';

import React, { useState } from 'react';
import { Box, ButtonBase } from '@mui/material';

const Carousel = ({ items = [], height = 200 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index) => {
    const total = items.length;
    if (index < 0) setCurrentIndex(total - 1);
    else if (index >= total) setCurrentIndex(0);
    else setCurrentIndex(index);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', height }}>
      <Box
        sx={{
          display: 'flex',
          transform: `translateX(-${currentIndex * 100 / items.length}%)`,
          transition: 'transform 0.5s ease',
          width: `${items.length * 100}%`,
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: `${100 / items.length}%`,
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            {item}
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: 8,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
        }}
      >
        {items.map((_, index) => (
          <ButtonBase
            key={index}
            onClick={() => goTo(index)}
            sx={{
              height: 12,
              borderRadius: 3,
              transition: 'all 0.3s',
              backgroundColor: currentIndex === index ? 'rgba(65,65,65,0.7)' : '#DADADA',
              width: currentIndex === index ? 60 : 35,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
