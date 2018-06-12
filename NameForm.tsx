import * as React from 'react';

// tslint:disable-next-line:interface-name
 export interface DetailsState {
    height?:number,
    weight?:number,
    result?:number,
   // value?: string,
    
}
class NameForm extends React.Component<{}, DetailsState>{
  public displayResult(): string{
    // tslint:disable-next-line:no-unused-expression
    if(this.state.result>=25.0) {
      return("you are overweight")
    }  else if(this.state.result<=18.5) { return("you are underweight") } else { return("you are perfect") }
    
  }
  public calculateBmi(height: number, weight: number): number{
    // tslint:disable-next-line:label-position
  
if(height!==0){
    height= this.state.height;
    weight= this.state.weight;
    return(weight/(height*height))}
else {
  return 0;
}
  }
  
      // tslint:disable-next-line:member-ordering
      public state = {
        height: 0,
        weight: 0,
        // tslint:disable-next-line:object-literal-sort-keys
        result: 0,
      // value: 'addition'
    };  
    // tslint:disable-next-line:no-empty
   
     // tslint:disable-next-line:member-access
    handleChange = (event) => {
        this.setState({
           [event[`target`].id]: event[`target`].value
          });
    }

  
    // tslint:disable-next-line:member-access
    handleChangeResult = (event) => {
      this.setState({
          result: event.target.value
          
        });
  }
    
   /* public handleSubmit(event: { preventDefault: () => void; }) {
      alert('your bmi is'+this.state.result);
      event.preventDefault();

    }*/

    // tslint:disable-next-line:no-empty
    
    
    public render() {
      this.state.result=this.calculateBmi(this.state.height, this.state.weight)
      return (
        <form > 
          <label><br /><br />
            Height in meters:
            <input type="text" id="height" value={this.state.height} onChange={this.handleChange} />
          </label>
          <label><br /><br /><br />
            Weight in kilograms:
            <input type="text" id ="weight" value={this.state.weight} onChange={this.handleChange} />
          </label>
         
          <label><br /><br /><br />
         
          your Bmi is: 
            <input type="text" value={this.calculateBmi(this.state.height, this.state.weight)} />
          </label><br /><br /><br />
          <label>
            Output:
            <input type="text" value={this.displayResult()} />
            </label>
        </form>
      );
    }
  }
  export default NameForm;