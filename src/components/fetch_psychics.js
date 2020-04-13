import React from 'react';
import "../App.css";


export default class FetchPsychics extends React.Component {
    state = {
        loading: true,
        psychics: null,
        psychicHeader: null,
        contact: null
    }
    async componentDidMount() {
        const url = "https://test-www.californiapsychics.com/json/reply/GetPsychicsList";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({psychics: data.results, loading: false})
    }

    renderTableData() {
        return this.state.psychics.map((psychic, index) => {
            const {lineStatus, lineName, tools, specialities, images} = psychic
            return (
               <tr key={index}>
                  <td>{lineStatus}</td>
                  <td>{lineName}</td>
                  <td>{tools}</td>
                  <td>{specialities}</td>
                  <td><img src={images[0]}/></td>
               </tr>
            )
         })
    }
    renderTableHeader() {
        let header = Object.keys(this.state.psychics[0])
        return (
            <>
            <th key={0}>Status</th> <th key={1}>(line) Name</th> <th key={2}>Tools</th> <th key={3}>Specialities</th> <th key={4}></th>
            </>
        )
     }

    render() {
        return <div><h3>
            {
            this.state.loading || !this.state.psychics ? 
                <div>loading...</div> 
            : 
            (<div>
                <table id='psychics' className='psychicsTable'>
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                    </tbody>
                </table>                
            </div>)
           }
           </h3>
        </div>
    }
}