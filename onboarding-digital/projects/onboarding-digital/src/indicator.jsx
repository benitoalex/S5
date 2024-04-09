import React, { Component } from 'react'; 
import styled from 'styled-components';

const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  margin-left: 20px; /* Espacio adicional para separar del borde inferior */
`;

const StepIndicator = styled.span`
  display: inline-block;
  width: 10px;
  height: ${props => props.isActive ? '6px' : '10px'};
  width: ${props => props.isActive ? '40px' : '10px'}; /* Ajustamos la altura según isActive */
  border-radius: ${props => props.isActive ? '50px' : '50%'}; /* Ajustamos el borde según isActive */
  margin: 0 5px;
  background-color: ${props => props.isActive ? '#000000' : '	#D3D3D3'};
  cursor: pointer;
`;

class Indicator extends Component {
    render() {
      const { totalSteps, currentStep, onChangeStep } = this.props;
  
      return (
        <IndicatorContainer>
          {[...Array(totalSteps)].map((_, index) => (
            <StepIndicator
              key={index}
              isActive={index === currentStep}
              onClick={() => onChangeStep(index)}
            />
          ))}
        </IndicatorContainer>
      );
    }
  }

    export default Indicator;
