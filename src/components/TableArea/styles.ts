import styled from 'styled-components';


export const Table = styled.table`
    width: 100%;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;

    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;

`;

export const TableHeadColum = styled.th<{ width?: number }>`

    width: ${props => props.width ? `${props.width}px` : 'auto'};

    padding: 10px 0px;
    text-align: left;
`;