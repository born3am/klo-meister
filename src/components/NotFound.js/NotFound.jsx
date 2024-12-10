import React from 'react'
import {useLocation} from "react-router"
import './NotFound.css'
export default function NotFound() {
    let location = useLocation();

    return (
        <div className='notfound'>
            <img src="https://img.freepik.com/free-vector/404-error-with-character-error-design-template-website_114341-24.jpg?size=626&ext=jpg&ga=GA1.2.1853385046.1635638400" alt="" />

        </div>
    )
}
