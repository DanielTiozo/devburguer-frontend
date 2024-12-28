import styled from 'styled-components';

export const ContainerButton = styled.button`
    background-color: ${(props) => props.theme.brown};
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: 0;
    font-size: 30px;
    color: ${(props) => props.theme.secondWhite};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &:hover{
        background-color: ${(props) => props.theme.lightbrown};
    }
`;
