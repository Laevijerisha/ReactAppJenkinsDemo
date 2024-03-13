import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Jest from './Jest';
describe('My Test Suite',()=>{
  test('Test Case-1',()=>{
    render(<App/>);//it is used to run/load our application 
    var text1=screen.getByText('Welcome to Jesttttt');//screen is used to access our front end screen
    expect(text1).toBeInTheDocument();//Here I am comparing the text is in the document or not toBeInTheDocument is one of the Matches
  });
  //skip my test case
  // test('Test Case-2',()=>{
  //   render(<App/>);
  //   const text2=screen.getByText('I am Testing your application');
  //   expect(text2).toBeInTheDocument();
  // }); 
  // //Instead of using test we can use "it"
  // it('Test Case-3',()=>{
  //   render(<App/>)
  //     const text3=screen.getByText('Hey.......');
  //     expect(text3).toBeInTheDocument();
  //   })
  //   test('Tes<t Case-4',()=>{
  //     render(<App/>)
  //     var element1=screen.getByTestId("Myh1");
  //     expect(element1).toBeInTheDocument();
  //     expect(element1).toHaveTextContent('Testing element');
     
  //   });
    
 
});
// describe('My Calculator Test Suite',()=>{
//   test('Test Case-1 [Render All UI]',()=>{
//     render(<Jest/>);

//     const TextBox1 = screen.getByTestId('TextBox1');
//     const TextBox2=screen.getByTestId('TextBox2');
//     const additionButton=screen.getByTestId('SubmitBox1');
//     expect(additionButton).toBeInTheDocument();
//   }) ;

//   test('Test Case-2[Render All Labels and Text Message]',()=>{
//     render(<Jest/>);
//     const Heading =screen.getByTestId("Heading");
//     const Label1=screen.getByTestId("Label1");
//     const Label2=screen.getByTestId("Label2");
//     const Result = screen.getByTestId("Result");

//     expect(Heading).toBeInTheDocument();
//     expect(Heading).toHaveTextContent("Addition of Two Numbers");

//     expect(Label1).toBeInTheDocument();
//     expect(Label1).toHaveTextContent("Enter First number to be added");

//     expect(Label2).toBeInTheDocument();
//     expect(Label2).toHaveTextContent("Enter Second number to be added");
    
 
//     expect(Result).toBeInTheDocument();
//     expect(Result).toHaveTextContent("Your Answer is :");
    
//   });
//   test('Test Case-3[Testing TextBoxes Inital Value]',()=>{
//     render(<Jest/>);
//     const TextBox1=screen.getByTestId("TextBox1");
//     const TextBox2=screen.getByTestId("TextBox2");
//     expect(TextBox1).toHaveTextContent('');
//     expect(TextBox2).toHaveTextContent('');
//   });
//   test('Test Case-4 [Testing Empty or Blank Input]',  ()=>{
//     render(<Jest/>)
//     const additionButton=screen.getByTestId("SubmitBox1");
    
//     fireEvent.click(additionButton);
    
//     const result=screen.getByTestId("InputBox3");
//     expect(result).toHaveValue("NaN")
//   });
//   test('Test Case-5[Testing Sucess Result]',()=>{
//     render(<Jest/>);
//     const TextBox1=screen.getByTestId("TextBox1");
//     const TextBox2=screen.getByTestId("TextBox2");
//     const additionButton=screen.getByTestId("SubmitBox1");

//     fireEvent.change(TextBox1,{target:{value:10}});
//     fireEvent.change(TextBox2,{target:{value:20}});
//     fireEvent.click(additionButton);
//     const Result = screen.getByTestId("InputBox3");
//     expect(Result).toHaveValue("30");
//   });
// });


// import { fireEvent, render, screen } from '@testing-library/react';
// import App from './App';
// import Jest from './Jest';

// describe('My Test Suite', () => {
//   test('Test Case-1', () => {
//     render(<App />);
//     const text1 = screen.getByText('Welcome to Jesttttt');
//     expect(text1).toBeInTheDocument();
//   });

//   test('Test Case-2', () => {
//     render(<App />);
//     const text2 = screen.getByText('I am Testing your application');
//     expect(text2).toBeInTheDocument();
//   });

//   it('Test Case-3', () => {
//     render(<App />);
//     const text3 = screen.getByText('Hey.......');
//     expect(text3).toBeInTheDocument();
//   });

//   test('Test Case-4', () => {
//     render(<App />);
//     const element1 = screen.getByTestId("Myh1");
//     expect(element1).toBeInTheDocument();
//     expect(element1).toHaveTextContent('Testing element');
//   });
// });

// describe('My Calculator Test Suite', () => {
//   test('Test Case-1 [Render All UI]', () => {
//     render(<Jest />);
//     const TextBox1 = screen.getByTestId('TextBox1');
//     const TextBox2 = screen.getByTestId('TextBox2');
//     const additionButton = screen.getByTestId('SubmitBox1');
//     expect(additionButton).toBeInTheDocument();
//   });

//   test('Test Case-2[Render All Labels and Text Message]', () => {
//     render(<Jest />);
//     const Heading = screen.getByTestId("Heading");
//     const Label1 = screen.getByTestId("Label1");
//     const Label2 = screen.getByTestId("Label2");
//     const Result = screen.getByTestId("Result");

//     expect(Heading).toBeInTheDocument();
//     expect(Heading).toHaveTextContent("Addition of Two Numbers");

//     expect(Label1).toBeInTheDocument();
//     expect(Label1).toHaveTextContent("Enter First number to be added");

//     expect(Label2).toBeInTheDocument();
//     expect(Label2).toHaveTextContent("Enter Second number to be added");

//     expect(Result).toBeInTheDocument();
//     expect(Result).toHaveTextContent("Your Answer is :");
//   });

//   test('Test Case-3[Testing TextBoxes Initial Value]', () => {
//     render(<Jest />);
//     const TextBox1 = screen.getByTestId("TextBox1");
//     const TextBox2 = screen.getByTestId("TextBox2");
//     expect(TextBox1).toHaveValue('');
//     expect(TextBox2).toHaveValue('');
//   });

//   test('Test Case-4 [Testing Empty or Blank Input]', () => {
//     render(<Jest />);
//     const additionButton = screen.getByTestId("SubmitBox1");

//     fireEvent.click(additionButton);

//     const result = screen.getByTestId("InputBox3");
//     expect(result).toHaveValue("NaN");
//   });

//   test('Test Case-5[Testing Success Result]', () => {
//     render(<Jest />);
//     const TextBox1 = screen.getByTestId("TextBox1");
//     const TextBox2 = screen.getByTestId("TextBox2");
//     const additionButton = screen.getByTestId("SubmitBox1");

//     fireEvent.change(TextBox1, { target: { value: 10 } });
//     fireEvent.change(TextBox2, { target: { value: 20 } });
//     fireEvent.click(additionButton);
//     const Result = screen.getByTestId("InputBox3");
//     expect(Result).toHaveValue("30");
//   });
// });
