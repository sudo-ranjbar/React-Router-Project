import { createBrowserRouter } from "react-router";
import Root from "./routes/Root";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Products from "./routes/products/Products"
import Blog from "./routes/blog/Blog"
import blogLoader from "./loaders/blogLoader";


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
                path: '/blog',
                Component: Blog,
                loader: blogLoader
            },
        ]
    }
])

export default router