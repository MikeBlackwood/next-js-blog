import fs from  'fs';
import path from 'path';
import matter from "gray-matter";
const postsDir = path.join(process.cwd(), 'content', 'posts');

const getPostData =(fileName) => {
    const filePath = path.join(postsDir, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data, content} = matter(fileContent);
    const postSlug = fileName.replace(/\.md$/, '');
    const postData = { slug: postSlug, ...data, content};
    return postData;
}
export const getAllPosts = () => {
       const postFiles = fs.readdirSync(postsDir);
       const allPosts = postFiles.map(postFiles => getPostData(postFiles));
       const sortedPost = allPosts.sort((postA, postB) => postA.date > postB.date? -1 : 1);
       return sortedPost;
}

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post => post.isFeatured);
    return featuredPosts;
}