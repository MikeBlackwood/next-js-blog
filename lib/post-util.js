import fs from 'fs';
import path from 'path';
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), 'content', 'posts');

export const getPostData =(fileName) => {
    const postSlug = fileName.replace(/\.md$/, '');
    const filePath = path.join(postsDir, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data, content} = matter(fileContent);
    const postData = { slug: postSlug, ...data, content};
    return postData;
}

export const getPostsFiles = () => {
    return fs.readdirSync(postsDir);
}
export const getAllPosts = () => {
       const postFiles = getPostsFiles();
       const allPosts = postFiles.map(postFiles => getPostData(postFiles));
       const sortedPost = allPosts.sort((postA, postB) => postA.date > postB.date? -1 : 1);
       return sortedPost;
}

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post => post.isFeatured);
    return featuredPosts;
}