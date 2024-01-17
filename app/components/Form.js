"use client"
import { useState } from "react";
import formStyle from '@/app/contact/contact.module.css'
import { IoPaperPlaneOutline } from "react-icons/io5";
import { GoPaperAirplane } from "react-icons/go";
const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMsg] = useState('');
    return (
        <form className={formStyle.fomrs}>
            <input type="text" value={name} name="name" id="nameField" placeholder="Enter Your Name" autoComplete="off" onChange={(e) => setName(e.target.value)} />
            <input type="email" value={email} name="email" id="emailField" autoComplete="off" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Enter valid email address" onChange={(e) => setEmail(e.target.value)} />
            <textarea value={message} name="msg" id="msgField" onChange={(e) => setMsg(e.target.value)} placeholder="Enter your message"></textarea>
            <button type="button">Submit <span><GoPaperAirplane /></span></button>
        </form>
    )
}

export default Form;