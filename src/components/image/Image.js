import React, { Component } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true
};

export class Image extends Component {
  state = {
    file:
      "https://cors-anywhere.herokuapp.com/https://hb.tinkerfcu.org/OnlineBanking/tinkerdisclosureservice.aspx?WEBPRIV.pdf",
    numPages: null
  };

  onFileChange = event => {
    this.setState({
      file: event.target.files[0]
    });
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { file, numPages } = this.state;

    return (
      <div className="Example">
        <header>
          <h1>react-pdf sample page</h1>
        </header>
        <div className="Example__container">
          <div className="Example__container__load">
            <label htmlFor="file">Load from file:</label>{" "}
            <input type="file" onChange={this.onFileChange} />
          </div>
          <div className="Example__container__document">
            <Document
              file={file}
              onLoadSuccess={this.onDocumentLoadSuccess}
              options={options}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </div>
    );
  }
  //   state = {
  //     numPages: null,
  //     pageNumber: 1
  //   };

  //   onDocumentLoadSuccess = ({ numPages }) => {
  //     this.setState({ numPages });
  //   };

  //   render() {
  //     const { pageNumber, numPages } = this.state;

  //     return (
  //       <div>
  //         <Document
  //           file="https://cors-anywhere.herokuapp.com/https://hb.tinkerfcu.org/OnlineBanking/tinkerdisclosureservice.aspx?WEBPRIV.pdf"
  //           onLoadSuccess={this.onDocumentLoadSuccess}
  //         >
  //           <Page pageNumber={pageNumber} />
  //         </Document>
  //         <p>
  //           Page {pageNumber} of {numPages}
  //         </p>
  //       </div>
  //     );
  //   }
}

export default Image;
