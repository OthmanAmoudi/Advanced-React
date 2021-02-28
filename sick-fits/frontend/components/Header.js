import React from 'react'
import Link from 'next/link';
import Nav from './Nav';
import styled from 'styled-components';


const Logo = styled.h1`
    font-size:4rem;
    margin-left:2rem;
    position: relative;
    z-index:2;
    transform:skew(-8deg);
    background-color:red;
    a {
        text-decoration:none;
        text-transform:none;
        padding:.5rem 1rem;
        color:white;
    }
`;

const HeaderStyles = styled.header`
    .bar {
        border-bottom:10px solid var(--black,black);
        display:grid;
        grid-template-columns:auto 1fr;
        justify-content:space-between;
        align-items:center;
    }
    .sub-bar {
        display:grid;
        grid-template-columns: 1fr auto;
        border-bottom:1px solid var(--black,black);
    }

`;

export default function Header() {
    return (
        <HeaderStyles>
            <div className="bar">
                <Logo>
                    <Link href="/">sick fits</Link>
                </Logo>
            </div>
            <div className="sub-bar">
                <Nav/>
            </div>

        </HeaderStyles>
    )
}
