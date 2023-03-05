import PostContent from "../../components/posts/post-detail/PostContent";
import {Fragment} from "react";
import {getAllPosts, getPostData, getPostsFiles} from "../../lib/post-util";
import Head from "next/head";

const PostDetailPage = (props) => {
 return( <Fragment>
         <Head>
             <title>{props.post.title}</title>
        <meta name='description' content={props.post.excerpt}/>
         </Head>
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