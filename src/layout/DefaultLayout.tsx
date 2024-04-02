import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import HeaderDefault from '../components/HeaderDefault';
import FooterDefault from '../components/FooterDefault';

const DefaultLayout = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const { pathname } = useLocation();

    const updateIsActive = () => {
        const { scrollY } = window;
        setIsActive(pathname === '/' ? scrollY > 300 : true);
    };

    useEffect(() => {
        const handleScroll = () => {
            updateIsActive();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    useEffect(() => {
        updateIsActive();
    }, [pathname]);

    return (
        <>
            <HeaderDefault isActive={isActive} />
            <Outlet />
            <FooterDefault />
        </>
    );
};

export default DefaultLayout;
