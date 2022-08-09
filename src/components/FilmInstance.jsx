const Film = ({ status, payload, error }) => {
    return (
        <div className="film">
            {status === "FULFILLED" ? (
                <>
                    <h1 className="episode">Episode</h1>
                    <p>
                        <b>Title: </b> {payload.title}
                    </p>
                    <p>
                        <b>Episode Id: </b> {payload.episode_id}
                    </p>
                    <p>
                        <b>Opening crawl: </b> {payload.opening_crawl}
                    </p>
                    <p>
                        <b>Director: </b> {payload.director}
                    </p>
                    <p>
                        <b>Producer: </b> {payload.producer}
                    </p>
                    <p>
                        <b>Release data: </b> {payload.release_date}
                    </p>
                    <p>
                        <b>Director: </b> {payload.director}
                    </p>
                    <div className="wrapper_arr">
                        <div className="episode_arr">
                            <h2>Characters</h2>
                            <ol className="characters">
                                {payload.characters.map((character) => (
                                    <li key={Math.random()}>{character.name}</li>
                                ))}
                            </ol>
                        </div>
                        <div className="episode_arr">
                            <h2>Planets</h2>
                            <ol className="planets">
                                {payload.planets.map((planet) => (
                                    <li key={Math.random()}>{planet.name}</li>
                                ))}
                            </ol>
                        </div>
                        <div className="episode_arr">
                            <h2>Starships</h2>
                            <ol className="starships">
                                {payload.starships.map((starship) => (
                                    <li key={Math.random()}>{starship.name}</li>
                                ))}
                            </ol>
                        </div>
                        <div className="episode_arr">
                            <h2>Vehicles</h2>
                            <ol className="vehicles">
                                {payload.vehicles.map((vehicle) => (
                                    <li key={Math.random()}>{vehicle.name}</li>
                                ))}
                            </ol>
                        </div>
                        <div className="episode_arr">
                            <h2>Species</h2>
                            <ol className="species">
                                {payload.species.map((specie) => (
                                    <li key={Math.random()}>{specie.name}</li>
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
                    <br />
                </>
            )}
        </div>
    );
};

export default Film;