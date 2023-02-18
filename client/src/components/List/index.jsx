import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Axios from "axios";

export default class List extends React.Component {
  state = {
    data: [],
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    Axios.get("http://localhost:3000").then((res) => {
      let dataApplication = res.data;
      let newState = [];
      for (let key in dataApplication) {
        newState.push({
          Id: key,
          Date: dataApplication[key].Date,
          Humidity: dataApplication[key].Humidity,
          MaxTemp: dataApplication[key].MaxTemp,
          MinTemp: dataApplication[key].MinTemp,
          NextValve: dataApplication[key].NextValve,
          Rain: dataApplication[key].Rain,
          StartData: dataApplication[key].StartData
        });
      }
      this.setState({
        data: newState,
      });
    });
  };


  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Test express connect frontend</h3>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>ID-Farm</th>
                  <th>Humidity</th>
                  <th>MaxTemp</th>
                  <th>MinTemp</th>
                  <th>NextValve</th>
                  <th>Rain</th>
                  <th>StartData</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((data) => (
                  <tr>
                    <td>
                      <Link to={`/edit/${data.Id}`}>{data.Id}</Link>
                    </td>
                    <td>{data.Humidity}</td>
                    <td>{data.MaxTemp}</td>
                    <td>{data.MinTemp}</td>
                    <td>{data.NextValve}</td>
                    <td>{data.Rain}</td>
                    <td>{data.StartData}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    );
  }
}
