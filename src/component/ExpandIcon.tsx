import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

const ExpandIcon = () => {
  const scrollToAbout = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '2rem',
        cursor: 'pointer',
        animation: 'bounce 2s infinite',
        '@keyframes bounce': {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(10px)',
          },
          '60%': {
            transform: 'translateY(5px)',
          },
        },
      }}
      onClick={scrollToAbout} 
    >
      <ExpandMoreIcon sx={{ fontSize: '2rem' }} />
    </Box>
  );
};

export default ExpandIcon;
