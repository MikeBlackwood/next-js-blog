import PostHeader from "./PostHeader";

const DuMMY_POST = {
    slug: 'getting-started-nextjs',
    title: 'Getting stated with next js',
    image: 'getting-started-nextjs.png',
    excerpt: 'Next JS - full-stack production dev',
    date: '2023-02-20',
    content : '# This is the first post'
}
const PostContent = () => {

    return (
        <article>
            <PostHeader title={DuMMY_POST.title} image={DuMMY_POST.image}/>
            Content
        </article>
    )

}

export default PostContent;