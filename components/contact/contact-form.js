import classes from "./contact.module.css";
import {useEffect, useState} from "react";
import Notification from "../ui/notification";

async function sendContactData(contactDetails) {
    const resp = await fetch('/api/contact', {
        method: 'POST',
        body :JSON.stringify(
            contactDetails
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await resp.json();
    if( !resp.ok){
        throw new Error(data.message);
    }
}
const ContactForm = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [requestStatus, setRequestStatus] = useState('');
    const [requestError, setRequestError] = useState();
    useEffect(()=> {
        if(requestStatus === 'success' || requestStatus === 'error')
        {
            const timer = setTimeout(()=> {
                setRequestStatus(null);
                setRequestError(null)
            }, 3000);
            return  () => clearTimeout(timer)
        }
    }, [requestStatus])
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setRequestStatus('pending');
        try {
            await sendContactData({name, email, message})
            setRequestStatus('success')
            setEmail('');
            setName('');
            setMessage('');
        }catch (e) {
            setRequestStatus('error')
            setRequestError(e.message);
        }
    }
    let notification;
    if(requestStatus === 'pending'){
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way!'
        }
    }
    if(requestStatus === 'success'){
        notification = {
            status: 'success',
            title: 'Success',
            message: 'Your message has been submitted!'
        }
    }
    if(requestStatus === 'error'){
        notification = {
            status: 'error',
            title: 'Error',
            message: requestError
        }
    }

    return(
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={handleFormSubmit}>
                    <div className={classes.controls}>
                        <div className={classes.control}>
                            <label htmlFor='email'>Your Email</label>
                            <input type='email' id='email' value={email} onChange={(e) => { setEmail(e.target.value)}} required/>
                        </div>
                        <div className={classes.control}>
                            <label htmlFor='name'>Your Name</label>
                            <input type='text' id='name'  value={name} onChange={(e) => {setName(e.target.value)}} required/>
                        </div>
                    </div>
                <div className={classes.control}>
                    <label htmlFor='message'>Your Message</label>
                    <textarea id='message' rows='5' value={message} onChange={(e)=> {setMessage(e.target.value)}} required></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
            </form>
            {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
        </section>
    )
}

export default ContactForm;