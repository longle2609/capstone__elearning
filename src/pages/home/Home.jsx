import React, { useEffect } from 'react'
import { getCoursesApi } from "../../api/courses.api"

const Home = () => {

    useEffect(() => {
        getCoursesApi()
            .then((res) => console.log("courses data: ", res))
            .catch((err) => console.log("error: ", err))
    }, [])

    return (
        <section className='home'>
            Home Page
        </section>
    )
}

export default Home
