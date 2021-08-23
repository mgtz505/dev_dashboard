import React from 'react';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/duotone-light.css";
import "codemirror/mode/javascript/javascript";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "../styles/editorpad.css";


const EditorPad = (props) => {

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
        <div className="widgit">
            
            <div className="editor-container">
                
                <div className="banner-container">
                    <h2>Javascript Scratchpad</h2>
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