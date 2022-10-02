import React from 'react';
import CustomForm from './CustomForm';

import MailchimpSubscribe from "react-mailchimp-subscribe";



const MailchimpForm = props => {
    const postUrl = `https://gmail.us10.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    console.log(process.env.NODE_ENV)
    console.log(postUrl)

    return (

        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className='max-w-md w-full space-y-8'>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    // console.log(this.status)
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                        />
                )}
                   
            />
            </div>
        </div>

    )
}

export default MailchimpForm;