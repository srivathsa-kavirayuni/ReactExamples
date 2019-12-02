import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';

import { fetchData, clearData } from './actions';

import AlbumsGrid from './components/AlbumsGrid';

class App extends Component {
    render() {
        const {
            fetchData,
            clearData,
            isLoading,
            error,
            data
        } = this.props;
const slicedData = data && data.length > 0 ? data.slice(0,15) : data
 console.log('Data Is : ', data, slicedData)
        return (
            <div className="App">
                <button onClick={fetchData}>Fetch Data</button>
                {isLoading && <h1>Fetching Data</h1>}
                {!isLoading && !error && <AlbumsGrid data={slicedData} />}
                {error && <h1>{error}</h1>}
                <button onClick={clearData}>Clear Data</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchData,
        clearData
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
