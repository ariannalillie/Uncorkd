import "./HomePage.css";
import logo from "../../media/home-image.svg"

function HomePage() {
    return (
        <div className="home-page">
            <h2 className="tagline">Discover and share awesome wines, wineries <br></br> and venues with your fellow wine snobs</h2>
            <img src={logo} alt="Logo" className='home-image'/>
        </div>
    )
};


export default HomePage;
