import AllPosts from "../../components/posts/AllPosts";
import {getAllPosts} from "../../lib/post-util";

const AllPostsPage = (props) => {
    return (
        <div>
           <AllPosts posts={props.posts}/>
        </div>
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