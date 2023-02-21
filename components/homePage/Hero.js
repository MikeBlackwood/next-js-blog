import classes from './hero.module.css';
import Image from "next/image";

const Hero = () =>
{
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
            <Image src="/images/site/Mike.jpg" alt='An image showing Mike' height={300} width={300}/>
            </div>
            <h1>Hi, I'm Mike</h1>
            <p>I blog about web dev </p>
        </section>
    )
}

export default Hero;