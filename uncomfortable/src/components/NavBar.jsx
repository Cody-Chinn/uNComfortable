import * as React from 'react';
import useMatchMedia from "../hooks/useMatchMedia";
import { Paper, BottomNavigation, BottomNavigationAction, AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Cottage';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    const isDesktopResolution = useMatchMedia('(min-width:992px)', true);
    const [value, setValue] = React.useState(0);
    
    return (
        <div className="NavBar">
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
                    display: { xs: 'flex' },
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
                    <Link to={'/'} style={{textDecoration: 'none'}}>
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button>
                    </Link>
                    <Link to={'episodes'} style={{textDecoration: 'none'}}>
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>Episodes</Button>
                    </Link>
                    <Link to={'events'} style={{textDecoration: 'none'}}>
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>Events</Button>
                    </Link>
                    <Link to={'shop'} style={{textDecoration: 'none'}}>
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>Shop</Button>
                    </Link>
                </Box>
                </Toolbar>
            </Container>
            </AppBar>
        )}
    
        {/** Mobile Nav Section */}
        {(!isDesktopResolution &&
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} variant='outlined'>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => { setValue(newValue); }}>
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Episodes" icon={<PlayCircleOutlineIcon />} />
                <BottomNavigationAction label="Events" icon={<CalendarMonthIcon />} />
                <BottomNavigationAction label="Shop" icon={<ShoppingCartIcon />} />
            </BottomNavigation>
            </Paper>
        )}
        </div>
    ); 
}