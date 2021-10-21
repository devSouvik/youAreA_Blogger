import classes from "./Header.module.css";
import image from "../assets/images/logos/small-logo.png"

const Header = () => {
    return (
        <div className={classes.main}>
            <div className={classes.left}>
                <h1>Blogger is a place to write, read and connect.</h1>
                <h4>It's easy and free to post your thinking on any topic and connect with millons of readers.</h4>
                <a href="#" className={classes.startButton}>
                   Start Writing </a>
            </div>
            <img className={classes["small-logo"]} src={image} />
        </div>
    )
}

export default Header
