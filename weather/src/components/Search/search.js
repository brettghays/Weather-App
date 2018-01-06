import React, {Component} from 'react';
import axios from 'axios'

const apiKey = "0a9e0cd119cd3229"

export default class Search extends Component {
    constructor(){
        super();
        this.state = {
            city: '',
            state: '',
            searchResults: [],
        }
    }

    handleCityChange(e){
        this.setState({
            city: e.target.value
        });
    }

    handleStateChange(e){
        this.setState({
            state: e.target.value
        });
    }

    getForecast(e){
        e.preventDefault();
        const {city,state} = this.state
        let results = [];
        axios.get(`http://api.wunderground.com/api/${apiKey}/forecast10day/q/${state}/${city}.json`)
        .then(res => {
            results.push(
                {
                    id:0,
                    day: res.data.forecast.simpleforecast.forecastday[0].date.weekday,
                    high: res.data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
                    low: res.data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
                    icon: res.data.forecast.simpleforecast.forecastday[0].icon_url,
                    forecast: res.data.forecast.simpleforecast.forecastday[0].conditions,
                },
                {
                    id: 1,
                    day: res.data.forecast.simpleforecast.forecastday[1].date.weekday,
                    high: res.data.forecast.simpleforecast.forecastday[1].high.fahrenheit,
                    low: res.data.forecast.simpleforecast.forecastday[1].low.fahrenheit,
                    icon: res.data.forecast.simpleforecast.forecastday[1].icon_url,
                    forecast: res.data.forecast.simpleforecast.forecastday[1].conditions,
                },
                {
                    id: 2,
                    day: res.data.forecast.simpleforecast.forecastday[2].date.weekday,
                    high: res.data.forecast.simpleforecast.forecastday[2].high.fahrenheit,
                    low: res.data.forecast.simpleforecast.forecastday[2].low.fahrenheit,
                    icon: res.data.forecast.simpleforecast.forecastday[2].icon_url,
                    forecast: res.data.forecast.simpleforecast.forecastday[2].conditions,
                },
                {
                    id: 3,
                    day: res.data.forecast.simpleforecast.forecastday[3].date.weekday,
                    high: res.data.forecast.simpleforecast.forecastday[3].high.fahrenheit,
                    low: res.data.forecast.simpleforecast.forecastday[3].low.fahrenheit,
                    icon: res.data.forecast.simpleforecast.forecastday[3].icon_url,
                    forecast: res.data.forecast.simpleforecast.forecastday[3].conditions,
                },
                {
                    id: 4,
                    day: res.data.forecast.simpleforecast.forecastday[4].date.weekday,
                    high: res.data.forecast.simpleforecast.forecastday[4].high.fahrenheit,
                    low: res.data.forecast.simpleforecast.forecastday[4].low.fahrenheit,
                    icon: res.data.forecast.simpleforecast.forecastday[4].icon_url,
                    forecast: res.data.forecast.simpleforecast.forecastday[4].conditions,
                }

            )
            this.setState({
                searchResults: results
            })
            
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
            <form onSubmit={e => this.getForecast(e)}>
            <input type="text" onChange={e => this.handleCityChange(e)}/>
            <select onChange={e => this.handleStateChange(e)}>
                <option defaultValue></option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
            <input type="submit" value="Get Weather"/>
            </form>
            
        </div>
        )        
    }
}