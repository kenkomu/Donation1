const Homepage = () => {
    return (
        <div className="boxed_wrapper">
        
        {/* preloader */}
        {/* <div className="loader-wrap">
            <div className="preloader">
                <div className="preloader-close">x</div>
                <div id="handle-preloader" className="handle-preloader home-1">
                    <div className="book">
                        <div className="inner">
                            <div className="preloader-left"></div>
                            <div className="preloader-middle"></div>
                            <div className="preloader-right"></div>
                        </div>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> */}
        {/* preloader end */}
        
        {/* main header */}
        <header className="main-header style-one">
            
            <div className="header-lower">

                {/* header-top */}
                <div className="header_top">
                    <div className="container">
                        <div className="header-top-content">
                            <div className="header_top_left">
                                <ul className="top_left">
                                    <li><a href="tel:12123002700"><i className="flaticon-phone-call"></i>+1 212 300 2700</a></li>
                                    <li><a href="mailto:infoyouremail.com"><i className="flaticon-email"></i> Infoyouremail.com</a></li>
                                    <li><i className="fa-regular fa-clock"></i> Mon - Fri: 9:00 - 18:00</li>
                                </ul>
                            </div>
                            <div className="header_top_right">
                                <div className="header_right_info">
                                    <ul className="top_right">
                                        <li><span>Social Links :</span></li>
                                        <li><a href="index.html#"> <i className="flaticon-facebook-app-symbol"></i></a></li>
                                        <li><a href="index.html#"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="index.html#"><i className="flaticon-twitter"></i></a></li>
                                        <li><a href="index.html#"><i className="fa-brands fa-dribbble"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                {/* header-top */}
                
                <div className="header_bottom p_relative">
                    <div className="container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo"><a href="index.html"><img src="assets/images/logo.png" alt=""/></a></figure>
                            </div>
                            <div className="menu-area">
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler">
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                </div>
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <ul className="navigation clearfix">
                                            <li className="dropdown"><a href="index.html" className="active">Home</a>
                                                <ul>
                                                    <li><a href="index.html" className="active">Home One</a></li>
                                                    <li><a href="index-2.html">Home Two</a></li>
                                                    <li><a href="index-3.html">Home Three</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="index.html#0">Our Causes</a>
                                                <ul>
                                                    <li><a href="about-us.html" >About Us</a></li>
                                                    <li><a href="causes-details.html">Causes Single</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="index.html#0">Events</a>
                                                <ul>
                                                    <li><a href="events.html">Events</a></li>
                                                    <li><a href="events-single.html">Events Single</a></li>
                                                    <li><a href="volunteer.html">Volunteer</a></li>
                                                    <li><a href="volunteer-single.html">Volunteer Single</a></li>
                                                    <li><a href="become-a-volunteer.html">Become a Volunteer</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="index.html#0">Our Blog</a>
                                                <ul>
                                                    <li><a href="our-blog.html">Our Blog</a></li>
                                                    <li><a href="blog-single.html">Blog Single</a></li>
                                                </ul>
                                            </li>  
                                            <li><a href="contact.html"> Contact </a></li>     
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="header__right">
                                <div className="header-scarce">
                                    <button className="btn primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                                        <i className="flaticon-search"></i>
                                    </button>
                                </div>
                                <div className="header__right__button">
                                    <div className="header-link-btn"><a href="contact.html" target="_blank" className="btn-1 btn-3">Donate Now <span></span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*sticky Header*/}
            <div className="sticky-header">
                <div className="auto_container">
                    <div className="outer-box">
                        <div className="logo-box">
                            <figure className="logo"><a href="index.html"><img src="assets/images/logo.png" alt=""/></a></figure>
                        </div>
                        <div className="menu-area">
                            <nav className="main-menu clearfix">
                                {/*Keep This Empty / Menu will come through Javascript*/}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* main-header end */}

        {/* search popup start*/}
        <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop">
            <div className="offcanvas-header">
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i className="flaticon-add"></i></button>
            </div>
            <div className="offcanvas-body">
                <form>
                    <input type="search" placeholder="Search..."/>
                    <i className="flaticon-search"></i>
                </form>
            </div>
        </div>
        {/* search popup end*/}

        {/* Mobile Menu  */}
        <div className="mobile-menu">
            <div className="menu-backdrop"></div>
            <div className="close-btn"><i className="fas fa-times"></i></div>
            <nav className="menu-box">
                <div className="nav-logo"><a href="index.html"><img src="assets/images/logo-2.png" alt="logo"/></a></div>
                <div className="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
                <div className="contact-info">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>Chicago 12, Melborne City, USA</li>
                        <li><a href="tel:+8801682648101">+88 01682648101</a></li>
                        <li><a href="mailto:info@example.com">info@example.com</a></li>
                    </ul>
                </div>
                <div className="social-links">
                    <ul className="clearfix">
                        <li><a href="index.html"><span className="fab fa-twitter"></span></a></li>
                        <li><a href="index.html"><span className="fab fa-facebook-square"></span></a></li>
                        <li><a href="index.html"><span className="fab fa-pinterest-p"></span></a></li>
                        <li><a href="index.html"><span className="fab fa-instagram"></span></a></li>
                        <li><a href="index.html"><span className="fab fa-youtube"></span></a></li>
                    </ul>
                </div>
            </nav>
        </div>
        {/* End Mobile Menu */}
   
        {/* banner section starts */}
        <section className="banner">
            <div className="banner-bottom-shape1">
                <img src="assets/images/shape/banner-bottom-left.png" alt="shape"/>
            </div>
            <div className="banner-bottom-shape2">
                <img src="assets/images/shape/banner-bottom-right.png" alt="shape"/>
            </div>
            <div className="banner-round-shape">
                <img src="assets/images/shape/banner-round.png" alt="shape"/>
            </div>
            <div className="banner-carousel owl-theme owl-carousel">
                <div className="slide-item">
                    <div className="banner-image"  style="background-image: url(assets/images/banner/banner-01.jpg);"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-slide">
                                    <div className="banner-content">
                                        <div className="banner-content-wrapper">
                                            <div className="banner-content-wrapper-inner">
                                                <div className="banner-title-shape">
                                                    <img src="assets/images/shape/banner-top-title.png" alt="shape"/>
                                                </div>
                                                <h2>Your  Donation Help to  Change 
                                                    Some <span>Life better.
                                                        <svg className="banner-text-shape" width="370" height="12" viewBox="0 0 370 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path id="signature" fill-rule="evenodd" clip-rule="evenodd" d="M233.825 0.0469343C175.672 0.607347 12.0352 4.20109 3.85735 5.09789C0.688188 5.44516 -0.145655 5.78953 0.019857 6.68126C0.135785 7.30764 1.01502 8.04713 1.97317 8.32335C3.17226 8.66989 3.31891 8.84968 2.44247 8.89898C0.563182 9.00556 1.27691 11.3103 3.3664 11.8837C4.32665 12.1476 10.6119 11.9468 17.3336 11.4379C30.0152 10.478 80.6254 7.51789 111.612 5.92438C123.302 5.32264 148.615 5.04642 185.289 5.11964C255.457 5.25957 295.959 6.43331 346.178 9.78056C371.181 11.4473 369.975 11.6046 369.995 6.67908C370.005 4.16629 369.865 4.00172 367.387 3.60443C356.273 1.82242 274.793 -0.347457 233.825 0.0469343ZM10.1754 8.0406C9.1195 8.20662 7.39106 8.20662 6.33444 8.0406C5.27851 7.87458 6.14239 7.73901 8.25493 7.73901C10.3675 7.73901 11.232 7.87458 10.1754 8.0406Z" fill="#EB9309"/>
                                                        </svg>
                                                    </span>
                                                </h2>
                                                <p>There are many variations of passages of Lorem Ipsum available but the majority have  suffered alteration in some form by injected humour or randomised. </p>
                                                <div className="header-link-btn"><a href="causes-details.html" target="_blank" className="btn-1"> VIEW CAUSES<span></span></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slide-item">
                    <div className="banner-image"  style="background-image: url(assets/images/background/footer-bg.jpg);"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-slide">
                                    <div className="banner-content">
                                        <div className="banner-content-wrapper">
                                            <div className="banner-content-wrapper-inner">
                                                <div className="banner-title-shape">
                                                    <img src="assets/images/shape/banner-top-title.png" alt="shape"/>
                                                </div>
                                                <h2>Your  Donation Help to  Change 
                                                    Some <span>Life better.
                                                        <svg className="banner-text-shape" width="370" height="12" viewBox="0 0 370 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path id="signature2" fill-rule="evenodd" clip-rule="evenodd" d="M233.825 0.0469343C175.672 0.607347 12.0352 4.20109 3.85735 5.09789C0.688188 5.44516 -0.145655 5.78953 0.019857 6.68126C0.135785 7.30764 1.01502 8.04713 1.97317 8.32335C3.17226 8.66989 3.31891 8.84968 2.44247 8.89898C0.563182 9.00556 1.27691 11.3103 3.3664 11.8837C4.32665 12.1476 10.6119 11.9468 17.3336 11.4379C30.0152 10.478 80.6254 7.51789 111.612 5.92438C123.302 5.32264 148.615 5.04642 185.289 5.11964C255.457 5.25957 295.959 6.43331 346.178 9.78056C371.181 11.4473 369.975 11.6046 369.995 6.67908C370.005 4.16629 369.865 4.00172 367.387 3.60443C356.273 1.82242 274.793 -0.347457 233.825 0.0469343ZM10.1754 8.0406C9.1195 8.20662 7.39106 8.20662 6.33444 8.0406C5.27851 7.87458 6.14239 7.73901 8.25493 7.73901C10.3675 7.73901 11.232 7.87458 10.1754 8.0406Z" fill="#EB9309"/>
                                                        </svg>
                                                    </span>
                                                </h2>
                                                <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised.</p>
                                                <div className="header-link-btn"><a href="causes-details.html" target="_blank" className="btn-1"> VIEW CAUSES<span></span></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="slide-item">
                    <div className="banner-image"  style="background-image: url(assets/images/banner/banner-01.jpg);"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-slide">
                                    <div className="banner-content">
                                        <div className="banner-content-wrapper">
                                            <div className="banner-content-wrapper-inner">
                                                <div className="banner-title-shape">
                                                    <img src="assets/images/shape/banner-top-title.png" alt="shape"/>
                                                </div>
                                                <h2>Your  Donation Help to  Change 
                                                    Some  <span>Life better.
                                                        <svg className="banner-text-shape" width="370" height="12" viewBox="0 0 370 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path id="signature3" fill-rule="evenodd" clip-rule="evenodd" d="M233.825 0.0469343C175.672 0.607347 12.0352 4.20109 3.85735 5.09789C0.688188 5.44516 -0.145655 5.78953 0.019857 6.68126C0.135785 7.30764 1.01502 8.04713 1.97317 8.32335C3.17226 8.66989 3.31891 8.84968 2.44247 8.89898C0.563182 9.00556 1.27691 11.3103 3.3664 11.8837C4.32665 12.1476 10.6119 11.9468 17.3336 11.4379C30.0152 10.478 80.6254 7.51789 111.612 5.92438C123.302 5.32264 148.615 5.04642 185.289 5.11964C255.457 5.25957 295.959 6.43331 346.178 9.78056C371.181 11.4473 369.975 11.6046 369.995 6.67908C370.005 4.16629 369.865 4.00172 367.387 3.60443C356.273 1.82242 274.793 -0.347457 233.825 0.0469343ZM10.1754 8.0406C9.1195 8.20662 7.39106 8.20662 6.33444 8.0406C5.27851 7.87458 6.14239 7.73901 8.25493 7.73901C10.3675 7.73901 11.232 7.87458 10.1754 8.0406Z" fill="#EB9309"/>
                                                        </svg>
                                                    </span>
                                                </h2>
                                                <p>There are many variations of passages of Lorem Ipsum available but the majority have  suffered alteration in some form by injected humour or randomised. </p>
                                                <div className="header-link-btn"><a href="causes-details.html" target="_blank" className="btn-1"> VIEW CAUSES<span></span></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        {/* banner section ends */}

        {/* features */}
        <div className="features">
            <div className="container">
                <div className="fearures-wrapper">
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="features-content wow fadeInUp">
                                <div className="features-icon features-icon-1">
                                    <i className="icon-i-01"></i>
                                </div>
                                <div className="features-info">
                                    <a href="events-single.html">Free Education</a>
                                    <p>There are many variations offertei passages of Lorem Ipsum but time 
                                        the majority have</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="features-content wow fadeInDown">
                                <div className="features-icon features-icon-2">
                                    <i className="icon-i-02"></i>
                                </div>
                                <div className="features-info">
                                    <a href="events-single.html">Healthy Food</a>
                                    <p>There are many variations offertei passages of Lorem Ipsum but time 
                                        the majority have</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="features-content wow fadeInUp">
                                <div className="features-icon features-icon-3">
                                    <i className="icon-i-03"></i>
                                </div>
                                <div className="features-info">
                                    <a href="events-single.html">Medical Help</a>
                                    <p>There are many variations offertei passages of Lorem Ipsum but time 
                                        the majority have</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="features-content wow fadeInDown">
                                <div className="features-icon features-icon-4">
                                    <i className="icon-i-04"></i>
                                </div>
                                <div className="features-info">
                                    <a href="events-single.html">Safe Water</a>
                                    <p>There are many variations offertei passages of Lorem Ipsum but time 
                                        the majority have</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* features */}

        {/* about */}
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="about-left-container">
                            <div className="about-image wow fadeInUp">
                                <img src="assets/images/gallery/about-img.png" alt="image"/>
                            </div>
                            <div className="about-image-bottom paroller" style="transform: translateY(-11px);">
                                <img src="assets/images/gallery/about-bottom-img.png" alt="image" />
                            </div>
                            <div className="round-shape">
                                <img src="assets/images/shape/round-shape.png" alt="shape"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-right-container">
                            <div className="common-title">
                                <h5>ABOUT US</h5>
                                <h3>If we are Helping Each others Human then the world will be always happy.</h3>
                            </div>
                            <div className="about-right-content">
                                <p>Non augue egestas commodo velit eget vestibulum tellus Curabitur vulputate justo elit at elementum orci pulvinar vel Pellentesque habitant morbi tristique time trave Pellentesqu habitant morbi tristique Ut non augue egestas commodo velit egettie vestibulum telluser vestomeri time to forever time to happy time.</p>
                                <div className="about-right-list">
                                    <ul>
                                        <li>There are many variations of passage of lorem.</li>
                                        <li>Available but the majority alteration.</li>
                                    </ul>
                                </div>
                                <div className="about-right-button-area">
                                    <a href="about-us.html" className="btn-1 btn-2">LEARN MORE <span></span></a>
                                    <div className="about-right-mail">
                                        <div className="mail-icon">
                                            <i className="flaticon-phone-call"></i>
                                        </div>
                                        <div className="mail-info">
                                            <span>Email Now!</span>
                                            <a href="mailto:infoyourmail@gmail.com">infoyourmail@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* about */}

        {/* featured */}
        <section className="featured">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="align-title">
                            <h5>WE LOVE TO HELP POOR</h5>
                            <h3>Find the popular cause  and donate them</h3>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="featured-container">
                            <div className="feature-button">
                                <a href="index.html#" className="c-btn yellow-btn">Education</a>
                            </div>
                            <div className="featured-share">
                                <a href="index.html#"><i className="fa-solid fa-share"></i></a>
                            </div>
                            <div className="featured-image">
                                <img src="assets/images/gallery/featured-01.png" alt="img"/>
                                <div className="featured-shape">
                                    <img src="assets/images/shape/featured-shape.png" alt="shape"/>
                                </div>
                            </div>
                            <div className="featured-content">
                                <a href="causes-details.html">How to build  secure life for the long-poor children.</a>
                                <p>There are many variations of passages offerpic Lorem Ipsum available some.</p>
                                <div id="skills-section">
                                    <div className="progress">
                                        <div className="progress-bar" data-progress="85">
                                            <span>85%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="featured-info">
                                    <ul>
                                        <li>
                                            <span>Goals</span>
                                            <a href="index.html#">$20,000</a>
                                        </li>
                                        <li>
                                            <span>Raised</span>
                                            <a href="index.html#">$7500</a>
                                        </li>
                                        <li>
                                            <span>To Go</span>
                                            <a href="index.html#" className="featured-info-go">$8000</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="featured-container">
                            <div className="feature-button">
                                <a href="index.html#" className="c-btn blue-btn">Medical</a>
                            </div>
                            <div className="featured-share">
                                <a href="index.html#"><i className="fa-solid fa-share"></i></a>
                            </div>
                            <div className="featured-image">
                                <img src="assets/images/gallery/featured-02.png" alt="img"/>
                                <div className="featured-shape">
                                    <img src="assets/images/shape/featured-shape.png" alt="shape"/>
                                </div>
                            </div>
                            <div className="featured-content">
                                <a href="causes-details.html">Raise Fund for Clean & Healthy Water for poor.</a>
                                <p>There are many variations of passages offerpic Lorem Ipsum available some.</p>
                                <div id="skills-section-one">
                                    <div className="progress">
                                        <div className="progress-bar progress-bar1" data-progress="30">
                                            <span>30%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="featured-info">
                                    <ul>
                                        <li>
                                            <span>Goals</span>
                                            <a href="index.html#">$10,000</a>
                                        </li>
                                        <li>
                                            <span>Raised</span>
                                            <a href="index.html#">$8500</a>
                                        </li>
                                        <li>
                                            <span>To Go</span>
                                            <a href="index.html#" className="featured-info-go">$6000</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="featured-container">
                            <div className="feature-button">
                                <a href="index.html#" className="c-btn red-btn">Food</a>
                            </div>
                            <div className="featured-share">
                                <a href="index.html#"><i className="fa-solid fa-share"></i></a>
                            </div>
                            <div className="featured-image">
                                <img src="assets/images/gallery/featured-03.png" alt="img"/>
                                <div className="featured-shape">
                                    <img src="assets/images/shape/featured-shape.png" alt="shape"/>
                                </div>
                            </div>
                            <div className="featured-content">
                                <a href="causes-details.html">Because Everyone Deserves for Clean Water.</a>
                                <p>There are many variations of passages offerpic Lorem Ipsum available some.</p>
                                <div id="skills-section-two">
                                    <div className="progress">
                                        <div className="progress-bar progress-bar2" data-progress="90">
                                            <span>90%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="featured-info">
                                    <ul>
                                        <li>
                                            <span>Goals</span>
                                            <a href="index.html#">$30,000</a>
                                        </li>
                                        <li>
                                            <span>Raised</span>
                                            <a href="index.html#">$6500</a>
                                        </li>
                                        <li>
                                            <span>To Go</span>
                                            <a href="index.html#" className="featured-info-go">$4000</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* featured */}

        {/* faq */}
        <section className="faq">
            <div className="container">
                <div className="row">
                    <div className="common-title">
                        <h5>FAQ</h5>
                        <h3>The Best Choice For your  Garden.</h3>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-left-content">
                            <div className="faq-image">
                                <img src="assets/images/gallery/faq.png" alt="img"/>
                                <div className="faq-shape">
                                    <img src="assets/images/shape/faq-shape.png" alt="shape"/>
                                </div>
                            </div>      
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-accordion ">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Can I make a donation on the phone for donate?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has rots ina pie
                                            ce of classNameical Latin literature from 45 BC, making it obscureLatinw lifetime chanages
                                            ords, consectetur, from a Lorem Ipsum passage, and going through the city apartoni
                                            ser of the word in classNameical literature, discovered written in roberbook is a time to for
                                            atise on the theory of ethics time view.
                                        </div>
                                    </div>
                                </div>
    
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How does Donetee conduct research and what are its findings?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has rots ina pie
                                            ce of classNameical Latin literature from 45 BC, making it obscureLatinw lifetime chanages
                                            ords, consectetur, from a Lorem Ipsum passage, and going through the city apartoni
                                            ser of the word in classNameical literature, discovered written in roberbook is a time to for
                                            atise on the theory of ethics time view.                                        
                                        </div>
                                    </div>
                                </div>
    
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            When does LoveIcon grant funds it has collected to charities?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has rots ina pie
                                            ce of classNameical Latin literature from 45 BC, making it obscureLatinw lifetime chanages
                                            ords, consectetur, from a Lorem Ipsum passage, and going through the city apartoni
                                            ser of the word in classNameical literature, discovered written in roberbook is a time to for
                                            atise on the theory of ethics time view.                                        
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            How much of my donation is going directly to people in need?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has rots ina pie
                                            ce of classNameical Latin literature from 45 BC, making it obscureLatinw lifetime chanages
                                            ords, consectetur, from a Lorem Ipsum passage, and going through the city apartoni
                                            ser of the word in classNameical literature, discovered written in roberbook is a time to for
                                            atise on the theory of ethics time view.                                        
                                        </div>
                                    </div>
                                </div>
    
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            What if I want to cancel my donation?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has rots ina pie
                                            ce of classNameical Latin literature from 45 BC, making it obscureLatinw lifetime chanages
                                            ords, consectetur, from a Lorem Ipsum passage, and going through the city apartoni
                                            ser of the word in classNameical literature, discovered written in roberbook is a time to for
                                            atise on the theory of ethics time view.                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* faq */}

        {/* volunteer */}
        <section className="volunteer">
            <div className="hands">
                <img src="assets/images/shape/hands.png" alt="shape"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="common-title">
                            <h5>BECOME A VOLUNTEER</h5>
                            <h3>We can help poor people  for development.</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="volunteer-image">
                            <div className="volunteer-image1">
                                <img src="assets/images/gallery/volunteer-01.jpg" alt="image"/>
                            </div>
                            <div className="volunteer-image2">
                                <img src="assets/images/gallery/volunteer-02.jpg" alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="volunteer-right-content">
                            <div className="volunteer-right-content-inner">
                                <h6>Love us A trusted name for helping the poor 
                                    We have been working on this project since 2000 to make.</h6>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="volunteer-content">
                                            <h6>Projects</h6>
                                            <span>10,000+</span>
                                            <p>There are many variations of passages  of Lorem Ipsum available</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="volunteer-content">
                                            <h6>Volunteers</h6>
                                            <span>200+</span>
                                            <p>There are many variations of passages  of Lorem Ipsum available</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="volunteer-button">
                                            <a href="volunteer.html" className="btn-1">Become A Volunteer <span></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* volunteer */}

        {/* team */}
        <section className="team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="align-title">
                            <h5>EXPERT TEAM</h5>
                            <h3>Meet Our Volunteer Team</h3>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="team-image">
                                <img src="assets/images/team/team-01.png" alt="img"/>
                            </div>
                            <div className="team-info">
                                <h6>Jennifer Loyang</h6>
                                <p>Volunteer</p>
                                <div className="team-media">
                                    <ul>
                                        <li><a href="index.html#"><i className="flaticon-twitter"></i></a></li>
                                        <li><a href="index.html#"> <i className="flaticon-facebook-app-symbol"></i></a></li>
                                        <li><a href="index.html#"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="index.html#"><i className="fa-brands fa-dribbble"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="2300ms">
                            <div className="team-image">
                                <img src="assets/images/team/team-02.png" alt="img"/>
                            </div>
                            <div className="team-info">
                                <h6>Marianne Forney</h6>
                                <p>Volunteer</p>
                                <div className="team-media">
                                    <ul>
                                        <li><a href="index.html#"><i className="flaticon-twitter"></i></a></li>
                                        <li><a href="index.html#"> <i className="flaticon-facebook-app-symbol"></i></a></li>
                                        <li><a href="index.html#"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="index.html#"><i className="fa-brands fa-dribbble"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-content wow fadeInUp" data-wow-delay="100ms" data-wow-duration="3000ms">
                            <div className="team-image">
                                <img src="assets/images/team/team-03.png" alt="img"/>
                            </div>
                            <div className="team-info">
                                <h6>Marry Helton</h6>
                                <p>Volunteer</p>
                                <div className="team-media">
                                    <ul>
                                        <li><a href="index.html#"><i className="flaticon-twitter"></i></a></li>
                                        <li><a href="index.html#"> <i className="flaticon-facebook-app-symbol"></i></a></li>
                                        <li><a href="index.html#"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="index.html#"><i className="fa-brands fa-dribbble"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* team */}

        {/* choose */}
        <section className="choose">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="choose-left-container">
                            <div className="common-title">
                                <h5>WE ARE ALWAYS OPEN</h5>
                                <h3>Make a monthly donation and know that 100% will must go to our projets.</h3>
                            </div>
                            <div className="choose-left-content">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have tigerpa suffered alteration in some form, by injected humour, or randomise time forev
                                    all kinds of projects, big and small time rover.</p>
                                <div className="choose-counter">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-6 col-md-4 d-flex align-items-center">
                                            <div className="funfact-block-two">
                                                <div className="inner-box">
                                                    <div className="count-outer count-box">
                                                        <span className="count-text" data-speed="1500" data-stop="45">0</span><span>%</span>
                                                    </div>
                                                    <p>Kids Needs To help</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-4  d-flex align-items-center">
                                            <div className="funfact-block-two">
                                                <div className="inner-box">
                                                    <div className="count-outer count-box">
                                                        <span className="count-text" data-speed="1500" data-stop="2500">0</span><span>+</span>
                                                    </div>
                                                    <p>Raised Funds</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-4  d-flex align-items-center">
                                            <div className="funfact-block-two">
                                                <div className="inner-box">
                                                    <div className="count-outer count-box">
                                                        <span className="count-text" data-speed="1500" data-stop="450">0</span><span>+</span>
                                                    </div>
                                                    <p>Satisfied Donors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="contact.html" className="btn-1 btn-2">DONATE NOW <span></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="choose-right-container wow fadeInRightBig">
                            <div className="choose-right-image">
                                <img src="assets/images/gallery/choose-image.jpg" alt="image"/>
                                <div className="choose-shape">
                                    <img src="assets/images/shape/choose.png" alt="shape"/>
                                </div>
                                <div className="choose-round-shape">
                                    <img src="assets/images/shape/round-shape.png" alt="shape"/>
                                </div>
                                <div className="missiom-video-btn">
                                    <a href="https://www.youtube.com/watch?v=kS0X-yIsB64" target="_blank" className="hv-popup-link"><i className="fas fa-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* choose */}

        {/* blog */}
        <section className="blog">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="common-title">
                            <h5>LATEST BLOG</h5>
                            <h3>Latest  News and Articles </h3>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-container">
                            <div className="blog-image">
                                <a href="blog-single.html"><img src="assets/images/gallery/blog-01.jpg" alt="img"/></a>
                            </div>
                            <div className="blog-content">
                                <span><i className="fa-regular fa-calendar-days"></i> 27/02/2022</span>
                                <a href="blog-single.html" className="blog-title">Providing Education Is the most Valuable Gift</a>
                            </div>
                            <div className="blog-image">
                                <a href="blog-single.html"><img src="assets/images/gallery/blog-02.jpg" alt="img"/></a>
                            </div>
                            <div className="blog-content">
                                <span><i className="fa-regular fa-calendar-days"></i> 27/02/2022</span>
                                <a href="blog-single.html" className="blog-title">Providing Education Is the most Valuable Gift</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-container activ-blog">
                            <div className="blog-image-middle">
                                <a href="blog-single.html"><img src="assets/images/gallery/blog-03.jpg" alt="img"/></a>
                            </div>
                            <div className="blog-content active-blog-content">
                                <span><i className="fa-regular fa-calendar-days"></i> 27/02/2022</span>
                                <a href="blog-single.html" className="blog-title">Providing Education Is the most Valuable Gift</a>
                                <p>Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is that</p>
                                <a href="blog-single.html" className="read-more">Read More <i className="fa-solid fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content right-blog-content">
                            <span><i className="fa-regular fa-calendar-days"></i> 27/02/2022</span>
                            <a href="blog-single.html" className="blog-title">Do you know why african people year of year waterless?</a>
                            <a href="blog-single.html" className="read-more">Read More <i className="fa-solid fa-chevron-right"></i></a>
                        </div>
                        <div className="blog-content right-blog-content">
                            <span><i className="fa-regular fa-calendar-days"></i> 27/02/2022</span>
                            <a href="blog-single.html" className="blog-title">Do you know why african people year of year waterless?</a>
                            <a href="blog-single.html" className="read-more">Read More <i className="fa-solid fa-chevron-right"></i></a>
                        </div>
                        <div className="blog-content right-blog-content">
                            <span><i className="fa-regular fa-calendar-days"></i> 27/02/2022</span>
                            <a href="blog-single.html" className="blog-title">Do you know why african people year of year waterless?</a>
                            <a href="blog-single.html" className="read-more">Read More <i className="fa-solid fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* blog */}

        {/* instagram */}
        <div className="inastagram-feed">
            <div className="instagram-carousel-container">
                <div className="instagram-carousel owl-carousel owl-theme">
                    <div className="instagram-content">
                        <div className="instagram-image">
                            <img src="assets/images/gallery/insta-04.jpg" alt="image"/>
                        </div>
                        <div className="instagram-overlay">
                          <div className="instagram-icon"><a href="assets/images/gallery/insta-02.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fa-brands fa-instagram"></i></a></div>
                        </div>
                    </div>
                    <div className="instagram-content">
                        <div className="instagram-image">
                            <img src="assets/images/gallery/insta-01.jpg" alt="image"/>
                        </div>
                        <div className="instagram-overlay">
                          <div className="instagram-icon"><a href="assets/images/gallery/insta-02.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fa-brands fa-instagram"></i></a></div>
                        </div>
                    </div>
                    <div className="instagram-content">
                        <div className="instagram-image">
                            <img src="assets/images/gallery/insta-02.jpg" alt="image"/>
                        </div>
                        <div className="instagram-overlay">
                          <div className="instagram-icon"><a href="assets/images/gallery/insta-03.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fa-brands fa-instagram"></i></a></div>
                        </div>
                    </div>
                    <div className="instagram-content hide">
                        <div className="instagram-image">
                            <img src="assets/images/gallery/insta-03.jpg" alt="image"/>
                        </div>
                        <div className="instagram-overlay">
                          <div className="instagram-icon"><a href="assets/images/gallery/insta-01.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fa-brands fa-instagram"></i></a></div>
                        </div>
                    </div>
                    <div className="instagram-content hide">
                        <div className="instagram-image">
                            <img src="assets/images/gallery/insta-05.jpg" alt="image"/>
                        </div>
                        <div className="instagram-overlay">
                          <div className="instagram-icon"><a href="assets/images/gallery/insta-02.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fa-brands fa-instagram"></i></a></div>
                        </div>
                    </div>
                    <div className="instagram-content hide">
                        <div className="instagram-image">
                            <img src="assets/images/gallery/insta-03.jpg" alt="image"/>
                        </div>
                        <div className="instagram-overlay">
                          <div className="instagram-icon"><a href="assets/images/gallery/insta-03.jpg" className="lightbox-image" data-fancybox="gallery"><i className="fa-brands fa-instagram"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* instagram */}

        {/* brand */}
        <div className="brand">
            <div className="brand-carousel-container">
                <div className="brand-carousel owl-carousel owl-theme">
                    <div className="brand-image">
                        <img src="assets/images/brand/brand-01.png" alt="brand"/>
                    </div>
                    <div className="brand-image">
                        <img src="assets/images/brand/brand-02.png" alt="brand"/>
                    </div>
                    <div className="brand-image">
                        <img src="assets/images/brand/brand-03.png" alt="brand"/>
                    </div>
                    <div className="brand-image">
                        <img src="assets/images/brand/brand-04.png" alt="brand"/>
                    </div>
                    <div className="brand-image">
                        <img src="assets/images/brand/brand-02.png" alt="brand"/>
                    </div>
                </div>
            </div>
        </div>
        {/* brand */}

        {/* news-letter */}
        <section className="news_letter">
            <div className="container">
                <div className="news_letter_content">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="news_letter_left p_relative">
                                <i className="icon-envelop"></i>
                                <h4><span>Subscirbe</span>  Newsletter</h4>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12 ps-xl-0">
                            <div className="news_letter_right p_relative">
                                <div className="form-inner p_relative">
                                    <form action="index.html" method="post" className="subscribe-form">
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Enter email address" required=""/>
                                            <div className="news-form-btn">
                                                <button type="submit" className="news_letter_btn"></button>
                                                <a href="javascript:void(0);" className="btn-1 news-btn">Subscribe Now <span></span></a>
                                            </div> 
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* news-letter-end */}

        
        {/* main-footer */}
        <footer className="main__footer p_relative">
            <div className="f-love1">
                <img src="assets/images/shape/f-love-01.png" alt="Love"/>
            </div>
            <div className="f-love2">
                <img src="assets/images/shape/f-love-02.png" alt="Love"/>
            </div>
            <div className="f-love3">
                <img src="assets/images/shape/f-love-03.png" alt="Love"/>
            </div>
            <div className="main__footer__top" style="background-image: url(assets/images/background/footer-bg.jpg);">
                <div className="footer__middle  p_relative d_block">
                    <div className="auto_container">
                        <div className="footer__middle__content">
                            <div className="row clearfix mb-40">
                                <div className="col-lg-4 col-md-6 col-sm-12 footer_column">
                                    <div className="footer_widget logo_widget">
                                        <div className="footer__logo mb_25">
                                            <figure>
                                                <img src="assets/images/footer-logo.png" alt="logo"/>
                                            </figure>
                                        </div>
                                        <p>Pricom makes it easy to order super soft, stylish custom printed everything that get your message into the world to very ditermind the time.</p>
                                        <ul className="social-links mt-40">
                                            <li><a href="index.html#0"> <i className="flaticon-facebook-app-symbol"></i></a></li>
                                            <li><a href="index.html#0"><i className="fa-brands fa-instagram"></i></a></li>
                                            <li><a href="index.html#0"><i className="flaticon-twitter"></i></a></li>
                                            <li><a href="index.html#0"><i className="fa-brands fa-dribbble"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 footer_column">
                                    <div className="footer_widget about_widget ml_95">
                                        <div className="widget_title">
                                            <h4>About Donatee</h4>
                                        </div>
                                        <ul className="links_list">
                                            <li><a href="about-us.html">About Us</a></li>
                                            <li><a href="causes-details.html">Start a Return</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                            <li><a href="events-single.html">Shipping FAQ</a></li>
                                            <li><a href="become-a-volunteer.html">Careers</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12 footer_column">
                                    <div className="footer_widget resources_widget ml_25">
                                        <div className="widget_title">
                                            <h4>Resources</h4>
                                        </div>
                                        <ul className="links_list">
                                            <li><a href="contact.html">Help Center</a></li>
                                            <li><a href="causes-details.html">Delivery</a></li>
                                            <li><a href="volunteer.html">Return Policy</a></li>
                                            <li><a href="index.html#">Policies</a></li>
                                            <li><a href="index.html#">Gift Cards</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 footer_column">
                                    <div className="footer_widget contact_widget ml_25">
                                        <div className="widget_title">
                                            <h4>Contact Us</h4>
                                        </div>
                                        <ul className="contact_list">
                                            <li><a href="tel:001406915511"><i className="flaticon-phone-call"></i> <span>0014 069 155 11</span></a></li>
                                            <li><a href="mailto:helloxyz@yourmail.com"><i className="flaticon-email"></i> <span>helloxyz@yourmail.com</span></a></li>
                                            <li><a href="contact.html"><i className="flaticon-pin"></i> <span>947 Island of harver apt.154 Rover Island 1597.</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright-container">
                                    <div className="copyright-left">
                                        <div className="copyright-reserved">
                                            <p>Copyright - All Rights Reserved.</p>
                                        </div>
                                        <div className="copyright-terms">
                                            <a href="index.html#0">Terms </a>
                                            <a href="index.html#0">Privacy</a>
                                        </div>
                                    </div>
                                    <div className="copyright-right">
                                        <p> Made with  By TemplatePath</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>
        {/* main-footer end */}


        
        
    </div>
    );
}
 
export default Homepage;