import React, {useState, useEffect} from 'react';
import InputField from './InputField'


const CustomForm = ({ status, message, onValidated }) => {


    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
        });

    }

    const refreshPage = () => {
      window.location.reload()
    }

    const clearFields = () => {
        setFirstName('');
        setEmail('');
    }
   
    useEffect(() => {
        if(status === "success") clearFields();
    }, [status])


    return (
        <form
            className="mb-100"
            onSubmit={(e) => handleSubmit(e)}
        >
            <h3 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {status === "success" ? "Success!" :
                    "Join our email list for future updates."}
            </h3>

            {status === "sending" && (
                <div
                    className="mt-2 text-left text-2xl uppercase tracking-wide font-semibold text-gray-500 sm:text-sm"
                >sending...</div>
            )}

            {status === "error" && (
                <div
                    className="mt-2 text-left text-2xl uppercase tracking-wide font-semibold text-red-500 sm:text-sm"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

            {status === "success" && (
                <div
                    className="mt-6 text-center text-3xl"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

            {status !== "success" ? (
                <div className="my-5">
                    <InputField
                        label="First Name: "
                        onChangeHandler={setFirstName}
                        type="text"
                        value={firstName}
                        placeholder="First Name"
                        isRequired
                    />

                    <InputField
                        label="Email"
                        onChangeHandler={setEmail}
                        type="email"
                        value={email}
                        placeholder="your@email.com"
                        isRequired
                    />

                </div>
            ) : null}

            {/*Close button appears if form was successfully sent*/}
            {
             status === 'success' ? <button
             className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"onClick={refreshPage}>Close</button>  : <InputField
             label="subscribe"
             type="submit"
             formValues={[email, firstName ]}
             />
           
            }
        </form>
    );
};

export default CustomForm;