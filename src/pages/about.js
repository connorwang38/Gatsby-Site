import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title = "About"/>
            <h1>About</h1>
            <h2>I am a rising senior that that loves web development and coding!</h2>
            <p><Link to = "/contact">Contact me!</Link></p>
        </Layout>
    )
}

export default AboutPage