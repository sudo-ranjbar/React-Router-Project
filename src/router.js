import { createBrowserRouter } from "react-router";
import Root from "./routes/Root";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Products from "./routes/products/Products"
import Stores from "./routes/stores/Stores"


const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/products',
                Component: Products
            },
            {
                path: '/stores',
                Component: Stores
            },
        ]
    }
])

export default router