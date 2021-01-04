import "./Reviews.css";
import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

function Reviews() {
    const [posts, setPosts] = useState([]);
    const { id } = useParams();

    useEffect(async() => {
        const res = await fetch(`/api/reviews/${id}`)
        const data = await res.json()
        console.log(data);
        setPosts(data)
    }, []);

return (
    <>
    <h1 className="search-header">Reviews</h1>
    {posts && posts.map((post)=>{
        const {User, Winery, rating, imgUrl, content, createdAt, id } = post;
        return (
          <div className="review-container" key={id}>
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
            <img className='review-images' src={imgUrl ? imgUrl : ""}></img>
          </div>
        );
    })}
    </>
)
}
export default Reviews;
