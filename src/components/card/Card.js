import React from 'react'
import "./card.css"

function Card() {
    return (
        <>
            
            {/* .masthead */}
            {/* <main className="main-area"> */}
                <div className="centered">
                    <section className="cards">
                        <article className="card">
                            <a href="#">
                                <picture className="thumbnail">
                                    <img
                                        src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-01.jpg"
                                        alt="A banana that looks like a bird"
                                    />
                                </picture>
                                <div className="card-content">
                                    <h2>Vacation Image 01</h2>
                                    <p>
                                        TUX re-inventing the wheel, and move the needle. Feature creep
                                        dogpile that but diversify kpis but market-facing.
                                    </p>
                                </div>
                                {/* .card-content */}
                            </a>
                        </article>
                        {/* .card */}
                        <article className="card">
                            <a href="#">
                                <picture className="thumbnail">
                                    <img
                                        src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-02.jpg"
                                        alt="Norwegian boller"
                                    />
                                </picture>
                                <div className="card-content">
                                    <h2>Vacation Image 02</h2>
                                    <p>
                                        Staff engagement synergize productive mindfulness and waste of
                                        resources cross sabers, or forcing function shotgun approach
                                        drink the Kool-aid.
                                    </p>
                                    <p>
                                        Execute are we in agreeance what do you feel you would bring to
                                        the table if you were hired for this position, nor closer to the
                                        metal goalposts, are there any leftovers in the kitchen?.
                                    </p>
                                </div>
                                {/* .card-content */}
                            </a>
                        </article>
                        {/* .card */}
                        <article className="card">
                            <a href="#">
                                <picture className="thumbnail">
                                    <img
                                        src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-03.jpg"
                                        alt="A dinosaur wearing an aluminium jacket"
                                    />
                                </picture>
                                <div className="card-content">
                                    <h2>Vacation Image 03</h2>
                                    <p>
                                        Viral engagement anti-pattern back of the net, for meeting
                                        assassin horsehead offer. Loop back design thinking drop-dead
                                        date.{" "}
                                    </p>
                                </div>
                                {/* .card-content */}
                            </a>
                        </article>
                        {/* .card */}
                        <article className="card">
                            <a href="#">
                                <picture className="thumbnail">
                                    <img
                                        src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-04.jpg"
                                        alt="Chocolate filled boller"
                                    />
                                </picture>
                                <div className="card-content">
                                    <h2>Vacation Image 04</h2>
                                    <p>
                                        We need a paradigm shift get all your ducks in a row. I just
                                        wanted to give you a heads-up we need distributors to evangelize
                                        the new line to local markets when does this sunset? so waste of
                                        resources, yet fire up your browser, or touch base closing these
                                        latest prospects is like putting socks on an octopus.
                                    </p>
                                </div>
                                {/* .card-content */}
                            </a>
                        </article>
                        {/* .card */}
                    </section>
                    {/* .cards */}
                </div>
                {/* .centered */}
            {/* </main> */}
        </>


    )
}

export default Card