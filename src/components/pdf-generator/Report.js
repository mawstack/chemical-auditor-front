import React, { Component } from "react";
import ReactDOM from "react-dom";
import { savePDF } from "@progress/kendo-react-pdf";
import axios from "axios";
import { connect } from "react-redux";

class Report extends Component {
  state = {
    response: "",
    date: "",
    startTime: 0,
    finishTime: 0,
    cropRow: 0,
    chemicalUsed: "",
    whp: 0,
    ehd: "",
    rateApplied: 0,
    quantityApplied: 0,
    image: "",
    equipmentMethodUsed: "",
    speed: 0,
    deg: 0,
    notes: "",
    rows: []
  };

  table;

  async apiCall() {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/entries`, {
        headers: {
          Authorization: `Bearer ${this.props.jwtToken}`
        }
      })
      .then(res => {
        res.data.map(entry => {
          entry["link"] = `entries/${entry["_id"]}`;
        });
        this.setState({ rows: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.apiCall();
  }

  render() {

    return (
      <div>
        <div className="example-config">
          <button className="button" onClick={this.exportPDF}>
            Export PDF
          </button>
        </div>

        <table
          className="table"
          ref={table => {
            this.table = table;
          }}
        >
          <thead>
            <tr>
              <th>Operator</th>
              <th>Date</th>
              <th>Start</th>
              <th>Finish</th>
              <th>Crop Row</th>
              <th>Chemical</th>
              <th>WHP</th>
              <th>EHD</th>
              <th>Rate</th>
              <th>Quantity</th>
              <th>Equipment</th>
              <th>Wind speed</th>
              <th>Wind direction</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>{this.generateRows()}</tbody>
        </table>
      </div>
    );
  }

  generateRows() {
    const { rows } = this.state;
    return rows.map(row => {
      return (
        <tr key={row.name}>
          <td>{row.user}</td>
          <td>{row.date}</td>
          <td>{row.startTime}</td>
          <td>{row.finishTime}</td>
          <td>{row.cropRow}</td>
          <td>{row.chemicalUsed}</td>
          <td>{row.whp}</td>
          <td>{row.ehd}</td>
          <td>{row.rateApplied}</td>
          <td>{row.quantityApplied}</td>
          <td>{row.equipmentMethodUsed}</td>
          <td>{row.speed}</td>
          <td>{row.deg}</td>
          <td>{row.notes}</td>
        </tr>
      );
    });
  }

  exportPDF = () => {
    savePDF(ReactDOM.findDOMNode(this.table), {
      repeatHeaders: this.state.repeatHeaders,
      paperSize: "A4",
      margin: "2cm",
      landscape: true
    });
  };
}

const mapStateToProps = (state) => {
  return {
    jwtToken: state.jwtToken
  }
}

export default connect(mapStateToProps)(Report);
