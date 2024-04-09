import './card.css';


export function Card({ step, nextStep, prevStep, showNextButton, showPrevButton}) {
    const cardStyle = {
        backgroundColor: step.bgColor
    }

   return (
        <article className='card-container'>
            <header>
                <div className='container-fluid' style={cardStyle}>
                    <div className='image-card'>
                        <img src={step.image} alt={step.title} className='images img-fluid' />
                    </div>
                </div>
                <div className='container'>
                    <div className='text'>
                        <h4>{step.title}</h4>
                        <div>
                            <div>
                                {step.description}
                            </div>
                            <div className='button-container'>
                            {showPrevButton && <button className="arrow2-button" onClick={prevStep}><span className="arrow"></span></button>}
                            {showNextButton && <button className="arrow-button" onClick={nextStep}><span className="arrow"></span></button>}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </article>
    );
}
