import React from 'react';
import { Grid, Box } from '@mui/material';

// Example image array
const imageData = [
  'https://rukminim1.flixcart.com/fk-p-flap/530/810/image/823c3f1e5e5e51f3.jpg?q=80',
  'https://rukminim1.flixcart.com/fk-p-flap/530/810/image/7f7e9822cfab9b21.jpg?q=80',
  'https://rukminim1.flixcart.com/fk-p-flap/530/810/image/96ac45b9e9e7d3d6.jpg?q=80',
  // Add more if needed
];

const GridTemplate = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#f1f3f6' }}>
      <Grid container spacing={2}>
        {imageData.map((url, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              component="img"
              src={url}
              alt={`image-${index}`}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: '0px 1px 6px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridTemplate;
