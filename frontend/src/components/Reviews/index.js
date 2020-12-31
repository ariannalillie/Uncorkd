import "./Reviews.css";
import {useState, useEffect} from "react";
function Reviews() {
    const [posts, setPosts] = useState([]);

    useEffect(async() => {
        const res = await fetch('/api/reviews')
        const data = await res.json()
        console.log(data);
        setPosts(data)
    }, []);

return (
    <>
    <h1>The Reviews</h1>
    {posts.map((post)=>{
        const {User, Winery, rating, content, createdAt, id } = post;
        return (
          <div key={id}>
            <h3>Wine Snob: {User.name}</h3>
            <h3>
              Winery:{" "}
              <span>
                {Winery.name}
              </span>
            </h3>
            <h3>{rating} Stars</h3>
            <h3>{content}</h3>
            <h3>{createdAt}</h3>
            {/* <img src={imageUrl ? imageUrl : ""}></img> */}
          </div>
        );
    })}
    </>
)
}
export default Reviews;
