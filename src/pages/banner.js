import "../css/simon-banner.css"
import React, { Component } from 'react'
import {ContentfulClient, ContentfulProvider } from 'react-contentful'
//import Page from './page'

const contentfulClient = new ContentfulClient({
    accessToken: '-94TKm2uCUpPg7Xs1gG6P5ZcV3dCammtjXQE_4WBZyo',
    space: 'def6kgqu0wk2',
  });
const App = () => (
    <ContentfulProvider client={contentfulClient}>
    </ContentfulProvider>
)
export default class banner extends Component {
    state = {
        data: "",
        banner: ""
    }
    async componentDidMount() {
        const url = "https://cdn.contentful.com/spaces/def6kgqu0wk2/environments/master/entries/2TDz3W8r2ruw3leBJHOsIg";
        const response = await fetch(url, {method: "GET", headers: {Authorization: "Bearer -94TKm2uCUpPg7Xs1gG6P5ZcV3dCammtjXQE_4WBZyo"}});
        const data = await response.json();
        this.setState({banner: data.results, loading: false})

        App();
    }        
    render() {
return (
            <React.Fragment>
                <meta charset="UTF-8" />
                <br/>
                <div style={{textAlign: "center"}}/>
                    <div className="simon-container">
                        <div className="desktop" style={{ backgroundImage: "url(https://images.ctfassets.net/def6kgqu0wk2/15gdT96MBkQbbBaj3FXiaz/4e3e230f92f8127e44843a60a3b7b3df/landing-page-banner-980x350.jpg?h=350)", backgroundPosition: "left top" }}>
                            <div className="simon-content">
                                <h2 style={{ marginTop: 0, marginBottom: 0, fontSize: "32px" }}><span style={{ fontSize: "62px" }}>{"Just"} <span style={{ fontSize: "72px", verticalAlign: "-10px" }}>$</span><span style={{ fontSize: "120px", verticalAlign: "-25px;" }}>1</span> Per Minute</span></h2>
                                <h2 style={{ marginTop: "-2.6rem", marginBottom: "1.6rem" }}>For Your First Call</h2>
                                <p><a className="btn btn-Get-Started" style={{ padding: "10px 38px", fontSize: "34px" }} href="https://www.californiapsychics.com/ask-question-signup" data-category="CTA" data-action="Get Started - Top">Get Started</a></p>
                                <p style={{ fontSize: "16px" }}>Introductory offer is available<br />for new customers only.</p>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}
