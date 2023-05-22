# Getting Started with my

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

In your project directory, run:

### `npm install codebash_64_test_plugin`

## Run the modal

First, in the index.html, just before or after `<div id="root"></div>` add the modal container:

`<div id="modal"></div>`

Second: in your component add :

`const [modal, setModal] = useState(false)`
`const Toggle = () => setModal(!modal)`

Third add the Modal component with its props:

` <Modal
        show={modal}
        close={Toggle}
        title={"HRNet"}
        children={"Employee successfully added "}
      />`

Modify the title and the content as you want

Finally add a button where you want with `onClick={()=>Toggle()}`

Enjoy !
