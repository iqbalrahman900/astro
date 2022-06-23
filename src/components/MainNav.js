import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ 
        width: '100%',
        position: "fixed",
        bottom: 0,
   
        zIndex : 100,

    }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
         style={{color: "white"}}
         label="Hot" 
         icon={<WhatshotIcon />} 
         />

        <BottomNavigationAction 
        style={{color: "white"}}
        label="Favorites"
        icon={<FavoriteIcon />} 
        />

        <BottomNavigationAction
        style={{color: "white"}} 
        label="Nearby" 
        icon={<LocationOnIcon />} 
        />

        <BottomNavigationAction
        style={{color: "white"}} 
        label="Search" 
        icon={<SearchIcon />} 
        />

      </BottomNavigation>
    </Box>
  );
}