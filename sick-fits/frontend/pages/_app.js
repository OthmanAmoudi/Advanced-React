import React from 'react'
import Page from '../components/Page'
import Router from 'next/router';
//swap with our own
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart',()=>NProgress.start());
Router.events.on('routeChangeComplete',()=>NProgress.done());
Router.events.on('routeChangeError',()=>NProgress.done());

export default function MyApp({Component, pageProps}) {
    return (
        <Page>
            <Component {...pageProps} />
        </Page>
    )
}
