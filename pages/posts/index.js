import AllPosts from "../../components/posts/AllPosts";

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

const AllPostsPage = (props) => {
    return (
        <div>
           <AllPosts posts={DUMMY_POSTS}/>
        </div>
    )
}

export default AllPostsPage;