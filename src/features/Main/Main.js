import React from "react";
import { BsPersonCircle } from 'react-icons/bs';
import './Main.css';
import { AiFillStar, AiOutlineStar,
  } from 'react-icons/ai';


const Main = () => (

    <div className="main-div">
        <div className="topdiv">
             <p>Top part</p>
             <BsPersonCircle className="abcde" />
        </div>
        <div>
        <input type="text" placeholder="Search.."></input>
        </div>
        <div>
            <h3>Online Tutors</h3>
            <div className="grid-container">
                <div className="details">
                    <div className="detailsA">
                        <div className="detailsATop">
                            <BsPersonCircle className="mypic" /> 
                            <div>
                                <p>Name Here</p>
                                <p>Country Here</p>
                            </div>  
                        </div>
                    <p>dot</p>
                    </div>
                    <div className="detailsB">
                        <p className="detailsBp">1000+ Teachings</p>
                    </div>
                    <div className="detailsC">
                        <p className="detailsCp">Call Now</p>
                        <div className="starbox">
                            <AiFillStar className="stars" />
                            <AiFillStar className="stars" />
                            <AiFillStar className="stars" />
                            <AiFillStar className="stars" />
                            <AiOutlineStar className="stars" />
                        </div>
                    </div>
    
                </div>
                <div className="details">
                    <div className="detailsA">
                        <div className="detailsATop">
                            <BsPersonCircle className="mypic" /> 
                            <div>
                                <p>Name Here</p>
                                <p>Country Here</p>
                            </div>  
                        </div>
                    <p>dot</p>
                    </div>
                    <div className="detailsB">
                        <p className="detailsBp">1000+ Teachings</p>
                    </div>
                    <div className="detailsC">
                        <p className="detailsCp">Call Now</p>
                        <div className="starbox">
                            <AiFillStar className="stars" />
                            <AiFillStar className="stars" />
                            <AiFillStar className="stars" />
                            <AiFillStar className="stars" />
                            <AiOutlineStar className="stars" />
                        </div>
                    </div>
                </div>
                <div className="details">
                    <div className="detailsA">
                        <div className="detailsATop">
                            <BsPersonCircle className="mypic" /> 
                            <div>
                                <p>Name Here</p>
                                <p>Country Here</p>
                            </div>  
                        </div>
                    <p>dot</p>
                    </div>
                    <div className="detailsB">
                        <p className="detailsBp">1000+ Teachings</p>
                    </div>
                    <div className="detailsC">
                        <p className="detailsCp">Call Now</p>
                        <div className="starbox">
                            <AiFillStar className="stars" />
                            <AiFillStar className="stars" />
                            <AiFillStar className="stars" />
                            <AiFillStar className="stars" />
                            <AiOutlineStar className="stars" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
)

export default Main;