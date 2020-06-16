import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title = "Contact"/>
            <h1>Contact</h1>
            <p>Email: <a href = "https://www.google.com/">connorwang38@gmail.com</a></p>
            <p>Phone: +1 (224)-804-5336</p>
        </Layout>
    )
}

export default ContactPage