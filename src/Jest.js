import React from "react";

class Jest extends React.Component{
    constructor(props){
      super(props);
      this.state={Num : '',Num2 : '',Result :''};  
    }
    Add=()=>{
        var n1=parseInt(this.state.Num1);
        var n2=parseInt(this.state.Num2);
        var sum =n1+n2;
        this.setState({Result : sum});
    }
    render(){
        return(
            <div>
                <h1 data-testid="Heading">Addition of Two Numbers</h1>
                <br></br>
                <label data-testid="Label1">Enter First number to be added</label><input data-testid="TextBox1" type="number" value={this.state.Num1} onChange={(e)=>{this.setState({Num1 : e.target.value});}}/>
                <br></br>
                <label data-testid="Label2">Enter Second number to be added</label><input data-testid="TextBox2" type="number" value={this.state.Num2} onChange={(e)=>{this.setState({Num2 : e.target.value});}}/>
                <br></br>
                <input data-testid="SubmitBox1" type="submit" value="Addition" onClick={this.Add}/>
                <br></br>
                <label data-testid="Result">Your Answer is : </label><input data-testid="InputBox3" type="text" value={this.state.Result}></input>
                
            </div>
        )
    }
}
export default Jest;