import "./HomePage.css";
import logo from "../../media/home-image.svg"

function HomePage() {
    return (
        <div className="home-page">
            <img src={logo} alt="Logo" className='home-image'/>
        </div>
    )
};


export default HomePage;
