import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #00074a;
    color: #3664ff;
    padding: 1em 3em;
    border: 3px solid #3664ff;
    border-radius: 10% / 50%;;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5em;
    text-align:center;

    h1 {
        
        margin: 0;
    }
   
    input, button {
        border: none;
        outline: none;
        display: block;
        background-color: #00074a;
        margin-top: 1em;
        font-size: 1em;
        height: 2em;
        color: #3664ff;
    }

    input{
        width: 15em;
        border-bottom: 3px solid #3664ff;

    }
    button{
        margin-left: auto;
        margin-right: auto;
    }
    button:hover{
        background-color: #3664ff21;
    }
`;