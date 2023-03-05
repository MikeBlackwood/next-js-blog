import AllPosts from "../../components/posts/AllPosts";
import {getAllPosts} from "../../lib/post-util";
import {Fragment} from "react";
import Head from "next/head";

const AllPostsPage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta name='description' content='List of all posts and tutorials.'/>
            </Head>
           <AllPosts posts={props.posts}/>
        </Fragment>
    )
}

export default AllPostsPage;

export async function getStaticProps(context) {
    const posts = getAllPosts();

    return {
        props: {
            posts: posts
        }
    }
}