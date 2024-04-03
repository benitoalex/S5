export function Card({ step, nextStep }) {
    return (
        <article>
            <header>
                <h1>{step.title}</h1>
                <div>
                    <div>
                        {step.description}
                    </div>
                    <button onClick={nextStep}>Next</button>
                </div>
            </header>
        </article>
    )
}