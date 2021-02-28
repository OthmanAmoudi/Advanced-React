import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
        font-weight:normal;
        font-style:normal;
    }
    html {
        --red: #ff0000;
        --black: #393939;
        --grey:#3A3A3A;
        --gray:var(--grey);
        --lightGrey:var(#e1e1e1);
        --lightGray:var(----lightGrey);
        --offWhite:#ededed;
        --maxWith:1000px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.9);
        box-sizing: border-box; 
    }

    *,*:after,*:before {
        box-sizing:inherit;

    }
    body {
        font-family: 'radinka_next',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding:0;
        margin:0;
        line-height:2;
        font-size:1.5rem;
    }

    a {
        text-decoration:none;
        color:var(----black);
    }
    a:hover{
        text-decoration:underline;
    }
    button {
        font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

const InnerStyle = styled.div`
    max-width: var(--maxWidth);
    margin:0 auto;
    padding:2rem;
`;
export default function Page({children}) {
    return (
        <div>
            <GlobalStyle/>
            <Header/>
            <InnerStyle>
                {children}
            </InnerStyle>
        </div>
    )
}
