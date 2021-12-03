import localCoast from './images/local-coast.png'
import weather from './images/weather_dashboard.png'
import employee from './images/employee_tracker.png'
import note from './images/note_taker.png'
import stock from './images/stock_compare.png'
import tech from './images/tech.png'

const cardStyle = {
    width: 400,
    margin: 10
}
const invisDiv = {
    height: 90,
}

export default function Portfolio() {
    return (

        <div className="container">
            <h1 className="text-center">Portfolio</h1>
            <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3 m-3 justify-content-center'>
                <div className="card" style={cardStyle}>
                    <a href="https://local-coast.herokuapp.com/"><img className="card-img-top mt-2" src={localCoast} alt="Card image cap"/></a>
                    <div className ="card-body">
                    <p className ="card-text text-center"> Local Coast</p>
                    <p className ="card-text">https://github.com/stewsabatino/local-coast</p>
                    </div>
                </div>
                <div className="card" style={cardStyle}>
                    <a href="https://stewsabatino.github.io/weather_dashboard/"><img className="card-img-top mt-2" src={weather} alt="Card image cap"/></a>
                    <div className ="card-body">
                    <p className ="card-text text-center"> Weather App </p>
                    <p className ="card-text">https://github.com/stewsabatino/weather_dashboard</p>
                    </div>
                </div>
                <div className="card" style={cardStyle}>
                    <a href="https://github.com/stewsabatino/employee_tracker"><img className="card-img-top mt-2" src={employee} alt="Card image cap"/></a>
                    <div className ="card-body">
                    <p className ="card-text text-center"> Employee Tracker </p>
                    <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={cardStyle}>
                    <a href="https://fathomless-lake-72862.herokuapp.com/"><img className="card-img-top mt-2" src={note} alt="Card image cap"/></a>
                    <div className ="card-body">
                    <p className ="card-text text-center"> Note Taker </p>
                    <p className ="card-text">https://github.com/stewsabatino/note_taker</p>
                    </div>
                </div>
                <div className="card" style={cardStyle}>
                    <a href="https://ianclark-fullstack.github.io/muskytweets/"><img className="card-img-top mt-2" src={stock} alt="Card image cap"/></a>
                    <div className ="card-body">
                    <p className ="card-text text-center"> Musky Tweets </p>
                    <p className ="card-text">https://github.com/IanClark-fullStack/muskytweets</p>
                    </div>
                </div>
                <div className="card" style={cardStyle}>
                    <a href="https://secret-escarpment-96887.herokuapp.com"><img className="card-img-top mt-2" src={tech} alt="Card image cap"/></a>
                    <div className ="card-body">
                    <p className ="card-text text-center"> Tech Blog </p>
                    <p className ="card-text">https://github.com/stewsabatino/tech_blog</p>
                    </div>
                </div>
                <div style={invisDiv}></div>
            </div>
        </div>
        
    );
}