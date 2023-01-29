// 00 - React
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// 01 - Components
import BottomNavButton from './components/sub-components/BottomNavigationButton';
import iconHome from '../assets/icons/icon-home';
import iconFlux from '../assets/icons/icon-flux';
import iconBell from '../assets/icons/icon-bell';

// 02 - Custom Hooks
import useLocalStorage from '../hooks/useLocalStorage';

export default function BottomNavigation(props) {
    const [home, setHome] = useState({
        src: iconHome,
        title: 'Home',
        isEnabled: false,
    });
    const [flux, setFlux] = useState({
        src: iconFlux,
        title: 'Flux',
        isEnabled: false,
    });
    const [notification, setNotifications] = useState({
        src: iconBell,
        title: 'Notifications',
        isEnabled: false,
    });


    const [buttonActive, setButtonActive] = useLocalStorage('buttonActive', '');

    const changePath = () => {
        setTimeout(() => {
            setButtonActive((value) => value = window.location.pathname);
        }, 100);
    };

     useEffect(() => {
        changePath();
     }, []);

    useEffect(() => {
        console.log(buttonActive);
        if (buttonActive === '/') {
            setHome((prevValue) => prevValue = {...prevValue, isEnabled: true })
            setFlux((prevValue) => prevValue = {...prevValue, isEnabled: false })
            setNotifications(prevValue => prevValue = {...prevValue, isEnabled: false })
        }
        if (buttonActive === '/Flux' || buttonActive === '/flux') {
            setHome((prevValue) => prevValue = {...prevValue, isEnabled: false })
            setFlux((prevValue) => prevValue = {...prevValue, isEnabled: true })
            setNotifications((prevValue) => prevValue = {...prevValue, isEnabled: false })
        }
        if (buttonActive === '/Notifications' || buttonActive === '/notifications') {
            setHome(prevValue => prevValue = {...prevValue, isEnabled: false })
            setFlux(prevValue => prevValue = {...prevValue, isEnabled: false })
            setNotifications(prevValue => prevValue = {...prevValue, isEnabled: true })
        }
    }, [buttonActive]);
    // REFACTOR -- Toggles with UseEffect to render once button state changes 

    // TOGGLE Flux

    return (
        <div className="bottom-navigation">
            <div className="bottom-navigation-ui wrapper">
                <Link className="bottom-navigation-link" to="/" onClick={changePath}>
                    <BottomNavButton
                        button = {{
                            title: home.title,
                            isEnabled: home.isEnabled,
                            icon: home.src,
                        }}
                    />
                </Link>
                <Link className="bottom-navigation-link" to="/Flux" onClick={changePath}>
                    <BottomNavButton
                        button = {{
                            title: flux.title,
                            isEnabled: flux.isEnabled,
                            icon: flux.src,
                    }}
                />
                </Link>
                <Link className="bottom-navigation-link" to="/Notifications" onClick={changePath}>
                    <BottomNavButton
                        button = {{
                            title: notification.title,
                            isEnabled: notification.isEnabled,
                            icon: notification.src,
                    }}
                />
                </Link>
                <button className="navigation-button" onClick={props.switch}>
                    <div className="toggle">
                        <div className="toggle-body" data-button={props.animation}>
                            <span className="button-toggle-circle"></span>
                        </div>
                    </div>
                    <span className="navigation-text">Light Mode</span>
                </button>
            </div>
        </div>
    );
}
