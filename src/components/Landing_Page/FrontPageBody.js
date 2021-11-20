import classes from "./FrontPageBody.module.css";
import FrontPageCard from "./FrontPageCard";

const blogs=[
    {
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    date: "22 Oct",
    readTime: "5 min"
},
{
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    date: "22 Oct",
    readTime: "5 min"
},
{
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    date: "22 Oct",
    readTime: "5 min"
},
{
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    date: "22 Oct",
    readTime: "5 min"
},
{
    author: "Anushree das",
    title: "In Software, When an Engineer exits the Team",
    date: "22 Oct",
    readTime: "5 min"
}
]

const FrontPageBody = () => {
    return (
        <div className={classes.main}>
            {blogs.map((blog, index) => 
            <FrontPageCard key={index} {...blog}/>)}
           

        </div>
    )
}

export default FrontPageBody
