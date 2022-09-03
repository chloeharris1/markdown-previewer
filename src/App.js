import React from 'react'
import './styles.css';
// Import Marked library
import { marked } from 'marked';

// Allows line breaks with return button
marked.setOptions({
  breaks: true
});


class App extends React.Component {
  constructor(props){
    super(props);
    // Initialize state
    this.state = {
      markdown: placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState = ({
      markdown: e.target.value
      });
  }

  createMarkup(){
    return {__html: marked(this.state.markdown, {sanitize: true})};
  }

  render(){
    return (
      <div className='container'>
        <h1 className='text-center'>Markdown Previewer</h1>
        <div className='row d-flex form-outline'>
          <textarea id="editor" className='input col-md-6 col-xs-12 w-50 form-control' 
          value={this.state.markdown} 
          onChange={this.handleChange}>
          </textarea>
          
          <div id="preview" className='col-md-6 col-xs-12 text-left' dangerouslySetInnerHTML={this.createMarkup()}>

          </div>
        </div>
      </div>
    );
  }
}

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

Multi-line Code Block:
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
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

Image: ![Image]('../public/logo192.png')

`;


export default App;
