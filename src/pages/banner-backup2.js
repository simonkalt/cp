//import "../components/cssgetter"
import React, { Component } from 'react'

export default class banner extends Component {

    render() {
        return (
            <React.Fragment>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" id="bootstrap-css" href="https://blog-cdn.californiapsychics.com/blog/wp-content/themes/wp-zefir/css/bootstrap.min.css?ver=3.3.5" type="text/css" media="all" />
                <link rel="stylesheet" id="wp-zefir-cp-css" href="https://blog-cdn.californiapsychics.com/blog/lp/assets/css/legacy-styles.css?ver=0.9.23&amp;build=1.0.85.85" type="text/css" media="all" />
                <div className={"landingpage-template-default single single-landingpage postid-5942090"}>
                    <div id="banners-wrap" className="banners">
                        <div className="container wm980">
                            <div className="row">
                                <div className={"banners-container-col col-md-12"}>
                                    <div className="banners-container">
                                        <div className="banner mobile hidden-md hidden-lg" style={{ backgroundImage: "url(https://blog-cdn.californiapsychics.com/blog/lp/assets/images/landing-page-banner-486-350.jpg?build=1.0.85.85)", backgroundPosition: "left top" }}>
                                            <div className="banner-content">
                                                <h2 style={{ marginTop: 0, marginBottom: 0, fontSize: "24px" }}>
                                                    Just <span style={{ fontSize: "3.2 rem" }}>$</span><span style={{ fontSize: "4.2rem" }}>1</span>
                                                    <br />Per Minute
                                                 </h2>
                                                <p style={{ fontSize: "16px" }}>For Your First Call</p>
                                                <p style={{ fontSize: "16px" }}><a className="btn btn-Call-Now" href="tel:18005734784" data-category="CTA" data-action="Call Now Top">Call Now</a></p>
                                                <p style={{ fontSize: "16px" }}>Introductory offer is available<br />for new customers only.</p>
                                            </div>
                                        </div>
                                        <div className="banner desktop hidden-xs hidden-sm" style={{ backgroundImage: "url(https://blog-cdn.californiapsychics.com/blog/lp/assets/images/landing-page-banner-980x350.jpg?build=1.0.85.85)", backgroundPosition: "left top" }}>
                                            <div className="banner-content">
                                                <h2 style={{ marginTop: 0, marginBottom: 0, fontSize: "32px" }}><span style={{ fontSize: "62px" }}>Just <span style={{ fontSize: "72px", verticalAlign: "-10px" }}>$</span><span style={{ fontSize: "120px", verticalAlign: "-25px;" }}>1</span> Per Minute</span></h2>
                                                <h2 style={{ marginTop: "-2.6rem", marginBottom: "1.6rem" }}>For Your First Call</h2>
                                                <p><a className="btn btn-Get-Started" style={{ padding: "10px 38px", fontSize: "34px" }} href="https://www.californiapsychics.com/ask-question-signup" data-category="CTA" data-action="Get Started - Top">Get Started</a></p>
                                                <p style={{ fontSize: "16px" }}>Introductory offer is available<br />for new customers only.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
