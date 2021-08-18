import React from 'react';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/duotone-light.css";
import "codemirror/mode/javascript/javascript"

const Editor = () => {
    return (
        <div className="widgit">
            <h2>Editor</h2>
            <div></div>

            <div>
                <iframe 
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"/>
                
            </div>

        </div>
    );
};

export default Editor;