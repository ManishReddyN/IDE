import { UnControlled as CodeMirror } from "react-codemirror2";
require("codemirror/lib/codemirror.css");
require("codemirror/theme/material.css");
require("codemirror/theme/neat.css");
require("codemirror/mode/xml/xml.js");
require("codemirror/mode/javascript/javascript.js");
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <CodeMirror
        value="console.log('hello')"
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
        }}
        onChange={(editor, data, value) => {}}
      />
    </div>
  );
}

export default App;
