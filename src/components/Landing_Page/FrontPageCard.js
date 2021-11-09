import classes from './FrontPageCard.module.css'
import person from "../../assets/images/person.jpg"


const FrontPageCard = (props) => {
    return (
        <div className={classes.main}>
           <div className={classes.body}>
               <div className={classes["body__header"]}>
                   <div className={classes.imagediv}>
                       {/* <img src={person} alt="person" className={classes.image} /> */}
                       </div>
                   <h5 className={classes['header__title']}>{props.author}</h5>
               </div>
               <h3 className={classes["body__main"]}>{props.title}</h3>
                  <p className={classes.subtitle}>{props.date}. {props.readTime} read</p>
           </div>
        </div>
    )
}

export default FrontPageCard
