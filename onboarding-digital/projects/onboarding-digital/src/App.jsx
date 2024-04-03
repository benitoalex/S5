import React, { useState } from 'react';
import { Card } from './card.jsx';
export function App() {
    const [currentStep, setCurrentStep] = useState(0);

    const tutorialData = [
        {
            title: 'Dedica moltes hores',
            description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.'
        }]
    return (
        <section>
            <Card step={tutorialData[currentStep]} />
        </section>
    )
}