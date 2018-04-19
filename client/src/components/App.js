// ./react-redux-client/src/components/App.js
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount (){
    const data = new FormData();
    data.append('store', "google");
    this.props.mappedgetData(data);
  }
  onsubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', this.name.value);
    data.append('free', this.free.value);
    data.append('category', this.category.value);
    this
      .props
      .mappedgetData(data);
  }

  render() {
    // const appState = this.props.mappedAppState;

    return (
      <div>
        <div className="container">
          <h2>App data</h2>
          <div className="search-area">

            <label>Name :
            <input
              type="name"
              id="name"
              ref={(input) => {
              this.name = input
            }}/>
            </label><br/>
            <label>Free :&nbsp;
            <input
              type="checkbox"
              id="free"
              ref={(input) => {
              this.free = input
            }}/>
            </label><br/>
            <label>Category :&nbsp;
            <select
              name="category"
              id="category"
              ref={(input) => {
              this.category = input
            }}>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            </label><br/>
            <spam></spam>
            <button onClick={this.onsubmit}>SAVE</button>
          </div>
          <BootstrapTable
            data={[{
              url: "aaa",
              title: "hello"
            }
          ]}
            striped
            hover>
            <TableHeaderColumn isKey dataField='id'>APP ID</TableHeaderColumn>
            <TableHeaderColumn dataField='url'>URL</TableHeaderColumn>
            <TableHeaderColumn dataField='title'>Title</TableHeaderColumn>
            <TableHeaderColumn dataField='summary'>Summary</TableHeaderColumn>
            <TableHeaderColumn dataField='score'>Score</TableHeaderColumn>
            <TableHeaderColumn dataField='ratings'>Ratings</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
            <TableHeaderColumn dataField='size'>Size</TableHeaderColumn>
            <TableHeaderColumn dataField='develoeprId'>Developer ID</TableHeaderColumn>
            <TableHeaderColumn dataField='email'>Developer Email</TableHeaderColumn>
            <TableHeaderColumn dataField='genre'>Genre</TableHeaderColumn>
            <TableHeaderColumn dataField='genreid'>GenreId</TableHeaderColumn>
            <TableHeaderColumn dataField='released'>Released Date</TableHeaderColumn>
            <TableHeaderColumn dataField='updated'>Updated</TableHeaderColumn>
            <TableHeaderColumn dataField='version'>Version</TableHeaderColumn>
            <TableHeaderColumn dataField='comment'>Comment</TableHeaderColumn>
          </BootstrapTable>,
        </div>
      </div>
    );
  }
}
