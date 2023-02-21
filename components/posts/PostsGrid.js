import classes from "./posts-grid.module.css";
import PostItem from "./PostItem";


const PostsGrid = ({posts}) => {

    const renderedPosts = posts.map(post => <PostItem key={post.slug} post={post}/>);

    return(
        <ul className={classes.grid}>
            {renderedPosts}
        </ul>
    )

}

export default PostsGrid;