const aboutpage = () => {
    return (
        <div className="about">
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
        </div>
    );
}
 
export default aboutpage;