import React, { useState } from 'react';
import EditorPad from './EditorPad';
import "../styles/editorpad.css";


const Editor = () => {

    const [javascript, setJavascript] = useState("");

    const srcDoc = `
    <html>
    <script>${javascript}</script>
    </html>
    `
    return (
        <div className="widgit-tall ">
            <EditorPad 
            langauge="javascript"
            displayName="Javascript"
            value={javascript}
            onChange={setJavascript}
            srcDoc={srcDoc}
            />
            <textarea type="text" placeholder="Plain Text..." className="plaintext-scratch"></textarea>
        </div>
    );
};

export default Editor;