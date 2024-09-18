import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    .carrousel-item{
        padding-right: 40px;
    }

    .react-multiple-carousel__arrow--left{
        left: 10px;
        bottom: 10px;
        background-color: #2030a6;
    }

    .react-multiple-carousel__arrow--right{
        right: 50px;
        bottom: 10px;
        background-color: #2030a6;
    }

    padding-left: 40px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 600;
    color: #A41E11;
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
        background-color: #D62828;
        left: calc(50% - 40px);
    }
`;

export const ContainerItems = styled.div`
    background: url('${(props) => props.imageUrl}');
    background-position: center;
    background-size: cover;
    border-radius: 20px;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 260px;
`;

export const CategoryButton = styled(Link)`
    color: #EBDCB2;
    background-color: rgba(0,0,0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    margin-top: 50px;
    font-weight: 500;
    text-decoration: none;

    &:hover{
        background-color: #D62828;
    }
`;
