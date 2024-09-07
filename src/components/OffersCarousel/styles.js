import styled from 'styled-components';

export const Container = styled.div`
    .carrousel-item{
        padding-right: 40px;
    }
    overflow-x: hidden;
    
    .react-multi-carousel-list{
        overflow: visible;
    }

    .react-multiple-carousel__arrow--left{
        left: 10px;
        bottom: 30px;
        background-color: #2030a6;
    }

    .react-multiple-carousel__arrow--right{
        right: 50px;
        bottom: 30px;
        background-color: #2030a6;
    }

    padding-left: 40px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 600;
    color: #4B2E14;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 20px;

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 80px;
        height: 3px;
        background-color: #5C4033;
        left: calc(50% - 40px);
    }
`;
