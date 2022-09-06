import React from 'react'
import './styles.css';
// Import Marked library
import { marked } from 'marked';

// Allows line breaks with return button
marked.setOptions({
  breaks: true
});

const placeholder = `# Heading
## Sub-heading
### Another heading 

Text Attributes:
**bold text**
*italicized text*
~~strikethrough~~

Ordered List:
1. First Item
2. Second Item
3. Third Item

Unordered List:
- First Item
- Second Item
- Third Item

Code:
\`<div>Hello World</div>\`

Blockquote:
> "The sea was angry that day, my friends, like an old man trying to send back soup in a deli..."
>
>> George Costanza

Multi-line Code Block:
\`\`\`
{
  "firstName": "Art",
  "lastName": "Vandelay",
  "age": 30
}
\`\`\`

Horizontal Rule
___

[Link](https://www.github.com/chloeharris1)

Table: 
Syntax | Description 
----------- | -----------
Header | Title
Paragraph | Text

Image: 
![Beach](https://th.bing.com/th/id/OIP.YiXYoIBUMD1VrMRgzFeGbgAAAA?pid=ImgDet&rs=1)
`;

class App extends React.Component {
  constructor(props){
    super(props);
    // Initialize state
    this.state = {
      markdown: placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  }
  // This method will be called every time the value of text area is changed and update the state
  updateMarkdown(markdown) {
    this.setState({
      markdown
    });
  }
  // Event handler that calls updateMarkdown, assigning the input of textarea to the state markdown property
  handleChange =(e) => {
   this.updateMarkdown(e.target.value);
  }


  render(){
    return (
      <div className='container'>
        <div className='row d-flex'>
        <h1 className='text-center mt-2'>Markdown Previewer</h1>
          <Editor markdown={this.state.markdown} onChange={this.handleChange}/>
          <Preview markdown={this.state.markdown}/>
        </div>
      </div>
    );
  }
}
// Editor component
const Editor = (props) => {
  return (
    <textarea 
      id="editor"
      type="text"
      className='col-md-4 col-xs-12 scrollbar m-2'
      value={props.markdown} 
      onChange={props.onChange}>
      </textarea>
  );
};
// Preview component
const Preview = (props) => {
  return (
    <div 
    id="preview" 
    className='col-md-4 col-xs-12 text-left scrollbar m-2' 
    dangerouslySetInnerHTML={{__html: marked(props.markdown)}}></div>
  );
};



export default App;
