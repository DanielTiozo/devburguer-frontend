import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;
    background-color: ${(props) => props.theme.lightbrown};
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        color: #${(props) => props.theme.white};
        font-weight: lighter;
    }
`;
