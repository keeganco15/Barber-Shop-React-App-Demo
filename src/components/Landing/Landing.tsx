import './Landing.css';

function Landing(){
    return (
        <section id='landing-hero'>
            <div id="landing-hero-container">
                <h2>your hair <span style={{color: 'var(--color-active)'}}>deserves the best</span></h2>
                <p>something about the barber shop</p>
                <a href="#">Book now</a>
            </div>
        </section>
    )
}

export default Landing;