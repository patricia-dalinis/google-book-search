import React from "react";
import API from "../utils/API";
import {BrowserRouter as Router} from "react-router-dom";

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: false,
            deleted: false
        }
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleSaveClick = function(e) {
        this.setState({saved: true});
        const bookInfo = {
            title: this.props.title,
            authors: this.props.authors,
            link: this.props.link,
            img: this.props.img,
            description: this.props.description
        }
        e.preventDefault();
        API.addBookToDB(bookInfo).then(
            (response) => {
                console.log(response);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    handleDeleteClick(e) {
        this.setState({deleted: true});
        e.preventDefault();
        API.deleteBook(this.props.id).then(
            (response) => {
                console.log(response);
                Router.dispatch(this.props.location, null)
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        return(
            <div className="Results" id={(this.props.id)? this.props.id: null} style={{display: this.state.deleted? "none" : "block"}}>
                <div className="row">
                    <div className="aboutBook">
                        <h4>{this.props.title}</h4>
                        <p>By: {(this.props.authors)? this.props.authors.join(", "): "N/A"}</p>
                    </div>
                    <div className="btnDiv">
                        {
                            (this.props.link)? <a href={this.props.link} target="_blank" rel="noopener noreferrer"><button type="button" name="view">View</button></a> : null
                        }
                        {
                            (this.props.path === "/")? <button type="button" name="save" onClick={this.handleSaveClick} disabled={this.state.saved}>{(this.state.saved)? "Saved" : "Save"}</button> : <button type="button" name="Delete" onClick={this.handleDeleteClick} disabled={this.state.deleted}>Delete</button>
                        }
                    </div>
                </div>
                <div className="row">
                    {(this.props.img)? <img src= {
                        (this.props.img.smallThumbnail)? this.props.img.smallThumbnail:
                        (this.props.img.thumbnail)? this.props.img.thumbnail: ""
                    } alt="book cover"/>: null}
                    <p>{(this.props.description)? this.props.description: "N/A"}</p>
                </div>
            </div>
        );
    }
}

export default Results;