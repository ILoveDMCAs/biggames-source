// import classname from 'classnames';

interface InputI {
    name?: string;
    label?: string;
    isRequired?: boolean;
    errorMessage?: string;
}

export default function Input({ name = '', isRequired = false }: InputI): JSX.Element {
    // const errorLabelWrapperClasses = classname({
    //   'py-2 px-2': !errorMessage,
    //   'bg-error-red text-error-text py-1 px-2': errorMessage
    // });

    return (
        <>
            <div className="bg-white rounded-full border-2 overflow-hidden group defaulTransition border-black/10 focus-within:border-pageBlue">
                <input
                    aria-label={name}
                    tabIndex={0}
                    placeholder="Email Adress"
                    className="appearance-none outline-none py-3 w-full text-center placeholder:font-medium placeholder:text-xl text-pageBlack font-bold text-xl"
                    type="text"
                    name={name}
                    required={isRequired}
                />
            </div>
            {/* <span className={errorLabelWrapperClasses}>{errorMessage}</span> */}
        </>
    );
}
