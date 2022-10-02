import React from 'react';

const InputField = props => {

    //Checks if all the fields are filled and if an @ sign is used in the email field
    const validateInput = values => {

        if (values.some(f => f === "") || values[0].indexOf("@") === -1) {
            return true
        } else {
            return false
        }
        
        
    }
    const fixedInputClass="rounded-md shadow appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
    if (props.type === "submit") {
        return (
            <input
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                type='submit'
                value={props.label}
                disabled={validateInput(props.formValues)}
            />
        )
    } else if (props.type === "textarea") {
        return (
            <div className="my-5">
                <label className="inputField__label">
                    {props.label}
                    </label>
                    <textarea
                        onChange={(e) => props.onChangeHandler(e.target.value)}
                        placeholder={props.placeholder}
                        value={props.value}
                        required={props.isRequired}
                        className="inputField__field"
                        rows={7}
                        name={props.name}
                    />
            </div>
        );
    } else {
        return (
            <div className="my-5">
                <label className="sr-only">
                    {props.label}
                    </label>
                    <input
                        onChange={(e) => props.onChangeHandler(e.target.value)}
                        type={props.type}
                        placeholder={props.placeholder}
                        value={props.value}
                        required={props.isRequired}
                        className={fixedInputClass}
                        name={props.name}
                    />
            </div>
            
        );
    }
}
    export default InputField