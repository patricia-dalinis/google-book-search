import React from "react";
import Form from "../components/Form";
import ResultsDiv from "../components/ResultsDiv";
import API from "../utils/API";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInput: "",
            bookInfo: []
        }
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({bookInput: e.target.value})
    }

    handleSearchClick(e) {
        e.preventDefault();
        API.searchBooks(this.state.bookInput)
            .then(
                (response) => {
                    this.setState({bookInfo: response.data});
                    this.setState({bookInput: ""});
                }
            );
    }

    render() {
        return(
            <main>
                <Form handleChange={this.handleChange} handleSearchClick={this.handleSearchClick} />
                {(this.state.bookInfo.length > 0)?
                    <ResultsDiv bookInfo={this.state.bookInfo} path={this.props.match.path}/> : null
                }
            </main>
        );
    }
}

export default Search;