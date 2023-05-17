import React from 'react';
interface GreetingProps {
    message: string;
    enteredName: string;
    greetingDispatcher: React.Dispatch<{type: string, payload: string}>;
}
export default function Greeting(props: GreetingProps) {

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.greetingDispatcher({type: "enteredName", payload: event.target.value});
        props.greetingDispatcher({type: "message", payload: event.target.value});
        }
    console.log("Greeting.render");
    return (
        <div>
            <input type="text" value={props.enteredName} onChange={onChangeName} />
        
        <div>
            {props.message}
        </div>
        </div>
    );
}