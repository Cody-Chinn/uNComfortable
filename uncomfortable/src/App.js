import * as React from 'react';
import './App.css';
import { Paper, BottomNavigation, BottomNavigationAction, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuIcon from '@mui/icons-material/Menu';
import EpisodeCard from './components/EpisodeCard.jsx';
import useMatchMedia from './hooks/useMatchMedia';
import testData from './testData';

function App() {
  const [value, setValue] = React.useState(0);
  const isDesktopResolution = useMatchMedia('(min-width:992px)', true);

  return (
    <div className="App">
      {/** Desktop Nav Section */}
      {/* replace this app bar type with just the icon and the options at the top. A menu to open would add extra clicks to the UX */}
      {(isDesktopResolution && 
          <AppBar position="sticky">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                uNcomfortable
              </Typography>
            </Toolbar>
          </AppBar>
      )}

      {/** Episode list */}
      <Grid container spacing={2} display="flex" justifyContent="center" alignItems="center">
          {testData.map((episode) => (
            <Grid xs={10} md={8}>
              <EpisodeCard 
                title={"Episode " + episode.number + ": " + episode.title }
                description={episode.description}>
              </EpisodeCard>
            </Grid>
          ))}
      </Grid>
      
      {/** Mobile Nav Section */}
      {(!isDesktopResolution && 
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} variant='outlined'>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => { setValue(newValue); }}>
            <BottomNavigationAction label="Episodes" icon={<PlayCircleOutlineIcon />} />
            <BottomNavigationAction label="Shop" icon={<ShoppingCartIcon />} />
            <BottomNavigationAction label="Events" icon={<CalendarMonthIcon />} />
          </BottomNavigation>
        </Paper>
      )}
    </div>
  );
}

export default App;
