import PostHeader from "./PostHeader";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
const DUMMY_POST = {
    slug: 'getting-started-with-nextjs',
    title: 'Getting started with next js',
    image: 'getting-started-nextjs.png',
    excerpt: 'Next JS - full-stack production dev',
    date: '2023-02-20',
    content : '# This is the first post'
}
const PostContent = () => {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath}/>
            <ReactMarkdown>
                {DUMMY_POST.content}
            </ReactMarkdown>
        </article>
    )

}

export default PostContent;