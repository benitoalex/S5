export function Card({ step }) {
    return (
        <article>
            <header>
                <h1>{step.title}</h1>
                <div>
                    <div>
                        {step.description}
                    </div>
                </div>
            </header>
        </article>
    )
}