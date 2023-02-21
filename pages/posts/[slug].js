import PostContent from "../../components/posts/post-detail/PostContent";
import {Fragment} from "react";
import {getAllPosts, getPostData, getPostsFiles} from "../../lib/post-util";

const PostDetailPage = (props) => {
 return( <Fragment>
  <PostContent post={props.post}/>
  </Fragment>
 )
}

export async function getStaticProps(context)
{
  const {params} = context;
  const {slug} = params;
  const data =  getPostData(slug);

  return{
   props: {
    post: data
   },
   revalidate: 600
  }
}

export async function getStaticPaths(){
 const posts = getPostsFiles();
 const slugs = posts.map(fileName => fileName.replace(/\.md$/, ''));

 return {
  paths: slugs.map(slug => ({params: {slug}})),
  fallback: false
 };
}

export default PostDetailPage;