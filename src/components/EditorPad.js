import React from 'react';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/duotone-light.css";
import "codemirror/mode/javascript/javascript";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "../styles/editorpad.css";
import ModalContainer from "./ModalContainer";


const EditorPad = (props) => {

    const description = "Save any JS code for later use or use this as a simple text editor for saving links"
    const details = ["Numerical line headers automatically generate"]
    const {
        language,
        displayName,
        value,
        onChange
    } = props
    
    const handleChange = (editor,data,value) => {
        onChange(value);
    }

    return (
        <div >
            <ModalContainer title="JS Scratchpad" header="For all your code snippets" description={description} details={details}/>
            
            <div className="editor-container">
                
                <div className="banner-container">
                    <h2>Scratchpad</h2>
                </div>
                <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: "javascript",
                    theme: "duotone-light",
                    lineNumbers: true
                }}
                />
            </div>
        </div>
    );
};

export default EditorPad;