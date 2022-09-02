import React from 'react'
import './styles.css';
// Import Marked library
// import marked from 'marked';

const placeholder = `#Heading (H1)
## Sub-heading (H2)
### Another deeper heading (H3)

Text Attributes:
**bold text**
*italicized text*
~~strikethrough~~
> blockquote

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

Link: [title](https://www.example.com)

Image: ![alt text](image.jpg)

Table: 
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

Task List:
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

Highlight: I need to highlight these ==very important words==.

Emoji: That is so funny! :joy:

`;

class App extends React.Component {
  constructor(props){
    super(props);
    // Initialize state
    this.state = {
      markdown: placeholder,
    };
  }
  render(){
    return (
      <div className='container'>
        <div className='row d-flex justify-content-center text-center'>
          <h1>Markdown Previewer</h1>
          <textarea id="editor" className='col-md-6 col-xs-12' value={this.state.markdown}>

          </textarea>
          <div id="preview" className='col-md-6 col-xs-12'>

          </div>
        </div>
      </div>
    );
  }
}



export default App;
