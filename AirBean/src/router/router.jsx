import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../pages/home';
import { About } from '../pages/about';
import { Navigation } from '../pages/navigation';
import { Menu } from '../pages/menu';
import { Cart } from '../pages/cart';
import { Status } from '../pages/status';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/navigation',
        element: <Navigation />
    },
    {
        path: '/menu',
        element: <Menu />,
    },
    {
        path: '/cart',
        element: <Cart />
    },
    {
        path: '/status',
        element: <Status />
    }
]);