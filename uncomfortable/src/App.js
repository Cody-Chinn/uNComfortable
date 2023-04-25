import * as React from 'react';
import './App.css';
import { Paper, BottomNavigation, BottomNavigationAction, AppBar, Toolbar, Typography, Container, Box, Menu, MenuItem, Button, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Cottage';
import EpisodeCard from './components/EpisodeCard.jsx';
import useMatchMedia from './hooks/useMatchMedia';
import testEpisodeList from './Test Data/testEpisodeList';
import testFilterList from './Test Data/testFilterList';

function App() {
  const [value, setValue] = React.useState(0);
  const isDesktopResolution = useMatchMedia('(min-width:992px)', true);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="App">
      {/** Desktop Nav Section */}
      {(isDesktopResolution && 
          <AppBar position="static">
            <Container maxWidth='xl'>
              <Toolbar disableGutters>
              <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            uNcomfortable
          </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Episodes</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Events</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">Shop</Typography>
            </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            uNcomfortable
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Epsiodes
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Events
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Shop
              </Button>
          </Box>
              </Toolbar>
            </Container>
          </AppBar>
      )}

      {/** Episode list */}
      <Grid container spacing={2} display="flex" justifyContent="center">
        {(isDesktopResolution && 
        <Grid xs={2} md={2}>
          <Typography variant='h6' style={{'margin-top': '1em', 'margin-bottom': '1em'}}>Topics</Typography>
          {testFilterList['tags'].map((tag) => (
            <Card style={{'margin-top': '1em', 'margin-bottom': '1em'}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }}>
                  {tag}
                </Typography>
            </CardContent>
          </Card>
          ))
        }
        </Grid>
      )}
      
        <Grid xs={8} md={6}>
        {testEpisodeList.map((episode) => (
            <EpisodeCard 
              title={"Episode " + episode.number + ": " + episode.title }
              description={episode.description}>
            </EpisodeCard>
        ))}
        </Grid>
      </Grid>
      
      {/** Mobile Nav Section */}
      {(!isDesktopResolution && 
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} variant='outlined'>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => { setValue(newValue); }}>
            <BottomNavigationAction label="Home" icon={<HomeIcon />}/>
            <BottomNavigationAction label="Episodes" icon={<PlayCircleOutlineIcon />} />
            <BottomNavigationAction label="Events" icon={<CalendarMonthIcon />} />
            <BottomNavigationAction label="Shop" icon={<ShoppingCartIcon />} />
          </BottomNavigation>
        </Paper>
      )}
    </div>
  );
}

export default App;
