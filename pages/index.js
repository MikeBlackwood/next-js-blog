import Hero from "../components/homePage/Hero";
import {Fragment} from "react";
import FeaturedPosts from "../components/homePage/FeaturedPosts";

const DUMMY_POSTS = [
    {
        slug: 'getting-started-nextjs',
        title: 'Getting stated with next js',
        image: 'getting-started-nextjs.png',
        excerpt: 'Next JS - full-stack production dev',
        date: '2023-02-20',
    },
    {
        slug: 'getting-started-with-next-js2',
        title: 'Getting stated with next js',
        image: 'getting-started-nextjs.png',
        excerpt: 'Next JS - full-stack production dev',
        date: '2023-02-20',
    }
    ,    {
        slug: 'getting-started-with-next-js3',
        title: 'Getting stated with next js',
        image: 'getting-started-nextjs.png',
        excerpt: 'Next JS - full-stack production dev',
        date: '2023-02-20',
    }
]
const HomePage = () => {

    return (
        <Fragment>
            <Hero/>
            <FeaturedPosts posts={DUMMY_POSTS}/>
        </Fragment>
    )
}

// Hero
// Featured Posts

export default HomePage;