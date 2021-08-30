import React, { useState } from 'react';
import EditorPad from './EditorPad';

const Editor = () => {

    const [javascript, setJavascript] = useState("");

    const srcDoc = `
    <html>
    <script>${javascript}</script>
    </html>
    `
    return (
        <div className="widgit">
            <EditorPad 
            langauge="javascript"
            displayName="Javascript"
            value={javascript}
            onChange={setJavascript}
            srcDoc={srcDoc}
            />
        </div>
    );
};

export default Editor;