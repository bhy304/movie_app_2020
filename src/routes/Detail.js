import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/"); // Redirect to Home immediately
        }
    }
    render() {
        console.log(this.props);
        const { location } = this.props;
        if(location.state) {
            return (
                <div className="detail">
                    <h1 className="detail__title">{location.state.title}</h1>
                    <h3 className="detail__year">{location.state.year}</h3>
                    <ul className="detail__genres">{location.state.genres.map((genre, index) => (
                        <li key={index} className="genre">{genre}</li>
                    ))}
                    </ul>
                    <p className="detail__summary">{location.state.summary}</p>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;