import localCoast from './images/local-coast.png'

const cardStyle = {
    width: 400,
    margin: 10
}

export default function Portfolio() {
    return (

        <div className="container">
            <h1 className="text-center">Portfolio</h1>
            <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3 m-3 justify-content-center'>
                <div className="card" style={cardStyle}>
                    <a href="https://github.com/stewsabatino/local-coast"><img className="card-img-top mt-2" src={localCoast} alt="Card image cap"/></a>
                    <div className ="card-body">
                    <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={cardStyle}>
                    <a href="https://github.com/stewsabatino/local-coast"><img className="card-img-top mt-2" src={localCoast} alt="Card image cap"/></a>
                    <div className ="card-body">
                    <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={cardStyle}>
                    <a href="https://github.com/stewsabatino/local-coast"><img className="card-img-top mt-2" src={localCoast} alt="Card image cap"/></a>
                    <div className ="card-body">
                    <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={cardStyle}>
                    <a href="https://github.com/stewsabatino/local-coast"><img className="card-img-top mt-2" src={localCoast} alt="Card image cap"/></a>
                    <div className ="card-body">
                    <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={cardStyle}>
                    <a href="https://github.com/stewsabatino/local-coast"><img className="card-img-top mt-2" src={localCoast} alt="Card image cap"/></a>
                    <div className ="card-body">
                    <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={cardStyle}>
                    <a href="https://github.com/stewsabatino/local-coast"><img className="card-img-top mt-2" src={localCoast} alt="Card image cap"/></a>
                    <div className ="card-body">
                    <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}