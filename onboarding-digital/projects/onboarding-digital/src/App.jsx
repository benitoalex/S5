import React, { useState } from 'react';
import { Card } from './card.jsx';
import timeManagementImage from './Images/time_managment.svg';
import programmingImage from './Images/programming.svg';
import meditationImage from './Images/meditation.svg';
export function App() {
    const [currentStep, setCurrentStep] = useState(0);

    const tutorialData = [
        {
            title: 'Dedica moltes hores',
            description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
            image: timeManagementImage,
            bgColor: '#4a9b95'
        },{
            title: 'Programa projectes propis',
            description: 'Més val 10 hores treballant en prjectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
            image: programmingImage,
            bgColor: '#e0e0e0'
        }, {
            title: 'Procura descansar',
            description: 'Descansar bé i desconectar són vitals. D`aquesta manera reduiras l`estrés i l`ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.',
            image: meditationImage,
            bgColor: '#ffe061'
        }]

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };
    return (
        <section>
            <Card step={tutorialData[currentStep]} nextStep={nextStep} />
        </section>
    )
}