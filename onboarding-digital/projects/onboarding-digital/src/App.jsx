import React, { useState } from 'react';
import { Card } from './card.jsx';
import timeManagementImage from './Images/time_managment.svg';
import programmingImage from './Images/programming.svg';
import meditationImage from './Images/meditation.svg';
import styled, { keyframes } from 'styled-components';
import Indicator from './indicator.jsx';

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  animation: ${props =>
    props.direction === 'left' ? slideInLeft : slideInRight} 0.5s ease;

  &.exit {
    animation: ${props =>
    props.direction === 'left' ? slideOutRight : slideOutLeft} 0.5s ease;
  }
`;

export function App() {
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState(null);

    const tutorialData = [
        {
            title: 'Dedica moltes hores',
            description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
            image: timeManagementImage,
            bgColor: '#4a9b95'
        }, {
            title: 'Programa projectes propis',
            description: 'Més val 10 hores treballant en prjectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
            image: programmingImage,
            bgColor: '#e0e0e0'
        }, {
            title: 'Procura descansar',
            description: 'Descansar bé i desconectar són vitals. D`aquesta manera reduiras l`estrés i l`ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.',
            image: meditationImage,
            bgColor: '#ffe061'
        }
    ];

    const nextStep = () => {
        if (currentStep < tutorialData.length - 1) {
            setDirection('right');
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setDirection('left');
            setCurrentStep(currentStep - 1);
        }
    };

    const handleChangeStep = step => {
        setDirection(step > currentStep ? 'right' : 'left');
        setCurrentStep(step);
    };

    return (
        <section>
            <CardContainer direction={direction}>
                <Card
                    key={currentStep}
                    step={tutorialData[currentStep]}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    showNextButton={currentStep < tutorialData.length - 1}
                    showPrevButton={currentStep > 0}
                    totalSteps={tutorialData.length}
                    currentStep={currentStep}
                />
            </CardContainer>
            <Indicator
                totalSteps={tutorialData.length}
                currentStep={currentStep}
                onChangeStep={handleChangeStep}
            />
        </section>
    );
}
