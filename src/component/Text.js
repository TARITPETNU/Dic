//Step1: import react
import React from 'react';
import styled from 'styled-components';
//Step2: Create a component or function

const StyledWrapper = styled.div`
    color: red;
`
const Text = (props) => {
    return (
        <StyledWrapper>
             <h1>{props.title}</h1>
             <p>{props.content}</p>
            </StyledWrapper>
    )
}
//Step3: Export
export default Text;