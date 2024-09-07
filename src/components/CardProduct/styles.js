import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 20px;
    border-radius: 20px;
    background-color: #F5E5C0;
    cursor: grab;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    margin-bottom: 20px;

    div{
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 5px;
    }
    
    p{
        font-size: 18px;
        color: #F9A825;
        line-height: 20px;
        font-weight: 500;
        margin-top: 40px;
    }

    strong{
        font-size: 22px;
        color: #86B049;
        font-weight: 500;
        line-height: 20px;
    }
`;

export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    top: -50px;
`;
