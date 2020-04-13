import "../css/custom.css"
import React, { Component } from 'react'

export default class banner extends Component {

    render() {
        return (
            <React.Fragment>
                <head>
                    <link rel="stylesheet" href="https://blog-cdn.californiapsychics.com/blog/wp-content/themes/wp-zefir/css/bootstrap.min.css?ver=3.3.5"/>
                    <link rel="stylesheet" href="https://blog-cdn.californiapsychics.com/blog/lp/assets/css/legacy-styles.css?ver=0.9.23&amp;build=1.0.85.85"/>
                </head>
                <div class="landingpage-template-default single single-landingpage postid-5942090">
                    <div id="banners-wrap" class="banners">
                        <div class="container wm980">
                            <div class="row">
                            <div class="banners-container-col col-md-12">
                                    <div class="banners-container">
                                        <div class="banner mobile hidden-md hidden-lg smallbanner">
                                            <div class="banner-content">
                                                <h2 class="perminute">
                                                    Just <span class="just">$</span><span class="dollarnumber">1</span>
                                                    <br/>Per Minute
                                                </h2>
                                                <p class="standardpara">For Your First Call</p>
                                                <p class="standardpara"><a class="btn btn-Call-Now" href="tel:18005734784" data-category="CTA" data-action="Call Now Top">Call Now</a></p>
                                                <p class="standardpara">Introductory offer is available/<br/>for new customers only.</p>
                                            </div>
                                        </div>
                                        <div class="banner desktop hidden-xs hidden-sm bigbanner">
                                            <div class="banner-content">
                                                <h2 class="banner-content-h1"><span class="banner-contant-span-1">Just <span class="banner-contant-span-2">$</span><span class="banner-contant-span-3">1</span> Per Minute</span></h2>
                                                <h2 class="banner-content-h2">For Your First Call</h2>
                                                <p><a class="btn btn-Get-Started a-q" href="https://www.californiapsychics.com/ask-question-signup" data-category="CTA" data-action="Get Started - Top">Get Started</a></p>
                                                <p class="standardpara">Introductory offer is available<br/>for new customers only.</p>
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
