import Hero from "../components/homePage/Hero";
import {Fragment} from "react";
import FeaturedPosts from "../components/homePage/FeaturedPosts";
import {getFeaturedPosts} from "../util/post-util";


const HomePage = (props) => {

    return (
        <Fragment>
            <Hero/>
            <FeaturedPosts posts={props.posts}/>
        </Fragment>
    )
}

// Hero
// Featured Posts

export default HomePage;

export async function getStaticProps() {

    const posts = getFeaturedPosts();

    return {
        props:{
            posts
        }
    }
}