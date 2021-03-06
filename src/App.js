import React from 'react';
import './App.css';
import Table from './Table/Table';
import Loader from './Loader/Loader';
import _ from 'lodash';
import DetailRowView from './DetailRowView/DetailRowView';

class App extends React.Component{

    state ={
        isLoading: true,
        data: [],
        sort: 'asc', // 'desc'
        sortField: 'id',
        row: null,
    };

    async componentDidMount() {
        const response = await fetch("http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")
        const data = await response.json();
        console.log(data);

        this.setState({
            isLoading: false,
            data: _.orderBy(data, this.state.sortField, this.state.sort)
        });
    }

    onSort = sortField => {
        console.log(sortField)

        const cloneData = this.state.data.concat();
        const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';
        const orderedData = _.orderBy(cloneData, sortField, sortType);

        this.setState({
            data: orderedData,
            sort: sortType,
            sortField
        })
    };

    onRowSelect = row => {
        console.log(row);

        this.setState({row})
    };

  render() {
    return (
        <div className="container">
            {
                this.state.row ? <DetailRowView person={this.state.row}/> : null
            }

            {
                this.state.isLoading
                    ? <Loader/>
                    : <Table
                        data={this.state.data}
                        onSort={this.onSort}
                        sort={this.state.sort}
                        sortField={this.state.sortField}
                        onRowSelect={this.onRowSelect}
                    />
            }


        </div>
    );
  }
}

export default App;
