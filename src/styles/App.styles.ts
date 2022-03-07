import styled from 'styled-components';


export const Container = styled.div``;

export const Header = styled.div`
    background-color: darkblue;
    height: 150px;
    text-align: center;
`;

export const HeaderText = styled.h1`

    margin:0;
    padding:0;

    color: #fff;
    padding-top: 30px;
`;

export const Body = styled.body`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;
`;

export const Footer = styled.footer`
    position: absolute;
    bottom: 0;
    height: 20px;
    

    display: flex;
    justify-content: flex-end;
    
    align-items: center;

    a {
        color: #333;
        margin-left: 20px;
    }
`;


