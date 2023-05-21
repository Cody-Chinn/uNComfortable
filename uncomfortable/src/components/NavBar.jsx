import * as React from 'react';
import useMatchMedia from "../hooks/useMatchMedia";
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';

export default function NavBar(props) {
    const isDesktopResolution = useMatchMedia('(min-width:992px)', true);
    
    return (
        <div className="NavBar">
            {( isDesktopResolution ? <DesktopNavBar /> : <MobileNavBar /> )}
        </div>
    ); 
}