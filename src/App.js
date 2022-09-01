import React from 'react'
import './styles.css';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <textarea id="editor">

        </textarea>
        <div id="preview">

        </div>

      </div>
    );
  }
}

export default App;
