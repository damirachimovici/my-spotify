import React from 'react'
import {Link} from "react-router-dom";
import './Home.css'

class Home extends React.Component {

    render() {
        return(
            <div className="home-page">
                <div className="get-started">
                    <h1>mySpotify</h1>
                    <p>It can be ourSpotify only if you</p>
                    <div className="box">
                        <div className="btn btn-one">
                            <Link to="/login">
                                <button className="btn btn-two">Get started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home