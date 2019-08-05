import React from "react";
import Results from "../components/Results";

function ResultsDiv(props) {
    if(props.path === "/") {
        return(
            <div id="resultsDiv">
                <h3>Take a Gander...</h3>
                {props.bookInfo.map((book) => {
                    const details = book.volumeInfo;
                    return <Results
                    title={details.title}
                    authors={details.authors}
                    description={details.description}
                    link={details.canonicalVolumeLink}
                    img={details.imageLinks}
                    path={props.path}
                    key={book.id}/>
                })}
            </div>
        );
    } else if(props.path === "/saved") {
        if(props.savedBooks.length > 0) {
            return(
                <div id="resultsDiv">
                    <h3>Your Library</h3>
                    {props.savedBooks.map((book) => {
                        return <Results
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        link={book.link}
                        img={book.img}
                        id={book._id}
                        path={props.path}
                        key={book._id}/>
                    })}
                </div>
            );
        } else {
            return(
                 <div id="resultsDiv">
                    <h3>Your Library</h3>
                    <p>Nothing but dusty shelves here...</p>
                </div>
            );
        }
    }
}

export default ResultsDiv;