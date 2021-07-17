import React from 'react'
import {PageHeader} from 'antd'
import './Home.css'
const Home = () => {
    console.log("home");
    return (
        <>
            <div className="Home-header">
            <PageHeader 
                title={<p>Ilios</p>}
            />
            </div>
        </>
    )
}
export default Home;