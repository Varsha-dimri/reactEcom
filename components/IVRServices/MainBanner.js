import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
		<div className="main-banner">
		 <div className="d-table">
			    <div className="d-table-cell"> 
                    <div className="container-fluid"> 
						<div className="row h-100 justify-content-center align-items-center">
                            <div className="container mt-3">
                                <div className="carousel slide" carousel>
                                    <ul className="carousel-indicators">
                                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                        <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
                                        <li data-target="#myCarousel" data-slide-to="2" className="active"></li>
                                    </ul>

                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="images/banner-image/man.png" alt="Los Angeles" width="2100" height="500" />
                                        </div>
                                        <div className="carousel-item active">
                                            <img src="images/banner-image/8.png" alt="Chicago" width="2100" height="500" />
                                        </div>
                                        <div className="carousel-item active">
                                            <img src="ny.jpg" alt="New York" width="2100" height="500" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" data-slide="prev">
                                        <span className="carousel-control-prev-icon"></span>
                                    </a>
                                    <a className="carousel-control-next" data-slide="next">
                                        <span className="carousel-control-next-icon"></span>
                                    </a>
                                    <a className="carousel-control-next" data-slide="next">
                                        <span className="carousel-control-next-icon"></span>
                                    </a>
                                </div>
                            </div> 
                        </div>		
				    </div>
				</div> 
			</div>

			<div className="shape1">
				<img src="/images/shape1.png" alt="shape"/>
			</div>
			<div className="shape2 rotateme">
				<img src="/images/shape2.svg" alt="shape"/>
			</div>
			<div className="shape3">
				<img src="/images/shape3.svg" alt="shape"/>
			</div>
			<div className="shape4">
				<img src="/images/shape4.svg" alt="shape"/>
			</div>
			<div className="shape5">
				<img src="/images/shape5.png" alt="shape"/>
			</div>
			<div className="shape6 rotateme">
				<img src="/images/shape4.svg" alt="shape"/>
			</div>
			<div className="shape7">
				<img src="/images/shape4.svg" alt="shape"/>
			</div>
			<div className="shape8 rotateme">
				<img src="/images/shape2.svg" alt="shape"/>
			</div>
        </div>
    )
}

export default MainBanner;