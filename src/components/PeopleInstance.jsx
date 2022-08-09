const Hero = ({status, payload, error}) => {
    return (
        <div className="obi_van">
            {status === "FULFILLED" ? (
                <>
                    <h1 className="hero">Hero</h1>
                    <p>
                        <b>Name: </b> {payload.name}
                    </p>
                    <p>
                        <b>Height: </b>
                        {payload.height}
                    </p>
                    <p>
                        <b>Mass: </b>
                        {payload.mass}
                    </p>
                    <p>
                        <b>Hair Color: </b>
                        {payload.hair_color}
                    </p>
                    <p>
                        <b>Scin Color: </b>
                        {payload.skin_color}
                    </p>
                    <p>
                        <b>Eye Color: </b>
                        {payload.eye_color}
                    </p>
                    <p>
                        <b>Birth year: </b> {payload.birth_year}
                    </p>
                    <p>
                        <b>Gender: </b>
                        {payload.gender}
                    </p>
                    <div className="wrapper_arr">
                        <div className="hero_arr">
                            <h2>Films</h2>
                            <ol className="films">
                                {payload.films.map((film) => (
                                    <li key={Math.random()}>{film.title}</li>
                                ))}
                            </ol>
                        </div>
                        <div className="hero_arr">
                            <h2>Vehicles</h2>
                            <ol className="vehicles">
                                {payload.vehicles.map((vehicle) => (
                                    <li key={Math.random()}>{vehicle.name}</li>
                                ))}
                            </ol>
                        </div>
                        <div className="hero_arr">
                            <h2>Starships</h2>
                            <ol className="starships">
                                {payload.starships.map((starship) => (
                                    <li key={Math.random()}>{starship.name}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </>
            ) : (
                "Loading..."
            )}
            {status === "REJECTED" && (
                <>
                    <strong>ERROR</strong>: {error}
                </>
            )}
        </div>
    );
};


export default Hero;