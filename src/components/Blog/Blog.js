import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3 className='text-center font-semibold text-2xl mt-10'>Welcome to <span className='text-purple-800'>Kapuut!</span> Blog page </h3>
            <h4 className='text-center'>Web designing is brainpower made visible.</h4>
            <div className='items-start align-top ml-12 md:flex'>
                <div className="card w-96 bg-base-100 shadow-xl mt-10">
                    <div className="card-body">
                        <h2 className="card-title">Purpose of React Router</h2>
                        <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                            <br />
                            The purpose of react Router is to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.
                            <br />
                            By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mt-10">
                    <div className="card-body flex flex-col align-top justify-start items-start">
                        <h2 className="card-title">How does context API works?</h2>
                        <p> The React Context API allows us to pass data through our component trees, giving our components the ability to communicate and share data at different levels.
                            <br />
                            React.createContext() is all that is required in order for the task to proceed. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                        </p>

                    </div>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl mt-10">
                    <div className="card-body flex flex-col align-top justify-start items-start">
                        <h2 className="card-title">What is useRef</h2>
                        <p> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                            <br />
                            The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                        </p>
                    </div>
                </div>

                <div>

                    <div className="card-body">
                    </div>                    <p>

                        <br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;