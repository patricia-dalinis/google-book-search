import React from "react";
import ResultsDiv from "../components/ResultsDiv";
import API from "../utils/API";

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedBooks: []
        }
    }

    componentWillMount() {
        API.getBooks().then(
            (response) => {
                this.setState({savedBooks: response.data});
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        console.log(this.state.savedBooks);
        return(
            <main>
                <ResultsDiv savedBooks={this.state.savedBooks} path={this.props.match.path}/>
            </main>
        );
    }
}

export default Saved;