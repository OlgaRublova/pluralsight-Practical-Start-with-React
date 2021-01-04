import React, {Component} from 'react';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from '../search-results';
import HouseDetail from '../house';
import house from "../house";

class App extends Component {
    state = {};


    fetchHouses = () => {
        fetch('./houses.json')
            .then(rsp => rsp.json())
            .then(allHouses => {
                this.allHouses = allHouses;
                this.determineFeaturesHouses();
                this.determineUniqueCountries();
            })
    }
    determineFeaturedHouses = () => {
        if (this.allHouses) {
            const randomIndex = Math.floor(Math.random() * this.allHouses);
            const featuredHouse = this.allHouses[randomIndex];
            this.setState({featuredHouse});
        }
    }
    determineUniqueCountries = () => {
        const countries = this.allHouses ?
            Array.from(new Set(this.allHouses.map(h=>h.country))):[];
        countries.unshift(null);
        this.setState({countries});
    }

    render() {
        return (
            <div className="container">
                <Header subtitle="Providing houses all over the world!"/>
                <FeaturedHouse house={this.state.featuredHouse} />
            </div>
        )
    }
}

export default App;
