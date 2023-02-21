import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";



const PostItem = ({post}) => {
    const  { title, excerpt, date ,slug, image} = post;
    const formattedDate = new Date(date).toLocaleDateString('en-US',
        {day: 'numeric', month: 'long', year: 'numeric'})

    const imagePath =  `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`
    return (
        <li className={classes.post}>
            <Link href={linkPath}>
            <div className={classes.image}>
                <Image layout="responsive" alt={title} src={imagePath} width={300} height={200}></Image>
            </div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <time>{formattedDate}</time>
                <p>{excerpt}</p>
            </div>
        </Link>
        </li>
    )
}

export default PostItem;