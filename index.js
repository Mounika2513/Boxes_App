const Box = (props) => {
  //  Write your code here.
  const {button1, button2, button3} = props;
  return <h1></h1>
};

const element = (
  //  Write your code here.
  <Box button1= 'Like'/>
  <Box button2 = 'Comment'/>
  <Box button3 = 'Share'/>
  
);

ReactDOM.render(element, document.getElementById("root"));
