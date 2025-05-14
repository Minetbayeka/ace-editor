
import React, { useState } from "react";
import AceEditor from "react-ace";
import './assets/styles/Styles.css'

// Import a mode and theme 
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";


// Optionally load language tools if needed
import "ace-builds/src-noconflict/ext-language_tools";




function CodeEditor() {
  const [code, setCode] = useState("// Write your code here");
  const [output, setOutput] = useState("");

   const runCode = () => {
    try {
      // Capture console.log outputs
      const logs = [];
      const customConsole = {
        log: (...args) => logs.push(args.join(" ")),
      };

      // Use Function constructor to isolate scope
      const func = new Function("console", code);
      func(customConsole);

      setOutput(logs.join("\n"));
    } catch (err) {
      setOutput("Error: " + err.message);
    }
  };

  return (
    <div className="container ">
      <h1 id="react">React Ace Editor</h1>
      <AceEditor
        mode="javascript"
        theme="monokai"
        value={code}
        onChange={(value) => setCode(value)}
        name="ace-editor"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        width="100%"
        height="400px"
      />

      <button onClick={runCode} id="runBtn">Run</button>

        <h3>Output:</h3>
        <pre style={{ background: "#1e1e1e", color: "#dcdcdc", padding: "10px" }}>
          {output}
        </pre>
    </div>
    
    
  );
}

export default CodeEditor;













