import PostHeader from "./PostHeader";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark} from 'react-syntax-highlighter/dist/cjs/styles/prism'

const PostContent = (props) => {
    const {post} = props;
    const imagePath = `/images/posts/${post.slug}/${post.image}`
    const customRenders= {
        img(image){
            return <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300}></Image>
        },
        p(paragraph) {
            const {node} = paragraph;
            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                return (
                    <div className={classes.image}>
                        <Image
                            src={`/images/posts/${post.slug}/${image.properties.src}`}
                            alt={image.alt}
                            width={600}
                            height={300}/>
                    </div>
                )
            }
            return <p>{paragraph.children}</p>
        },
        code(code)
        {
            const {language, children} = code;
            return <SyntaxHighlighter  style={atomDark} language={language} children={children}/>
        }
    }
    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath}/>
            <ReactMarkdown components={customRenders}>
                {post.content}
            </ReactMarkdown>
        </article>
    )

}

export default PostContent;