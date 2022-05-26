const HeroList = ({ heroes }) => {
    return (
        <div>
            {heroes.map((hero) => (
                <div className="hero-preview" key={hero.id}>
                    <h2 key={hero.id}> {hero.alias} </h2>
                    <p key={hero.id}> {hero.name} </p>
                </div>
            ))}
        </div>
    );
}

export default HeroList;