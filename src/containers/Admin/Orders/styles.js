import Select from 'react-select';
import styled from 'styled-components';

export const ProductImage = styled.img`
    height: 68px;
    padding: 12px;
    border-radius: 16px;
`;

export const SelectStatus = styled(Select)`
    width: 240px;
`;

export const Filter = styled.div`
    display: flex;
    justify-content: center;
    margin: 28px 0;
    gap: 50px;
`;

export const FilterOptions = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    color: ${(props) => (props.$isACtiveStatus ? props.theme.brown : props.theme.darkGray)};
    border-bottom: ${(props) => (props.$isACtiveStatus ? `2px solid ${props.theme.brown}` : 'none')};
    font-size: 16px;
    line-height: 20px;
    padding-bottom: 5px;
`;
