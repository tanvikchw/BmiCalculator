import * as React from "react";
// tslint:disable-next-line:ordered-imports
import * as Adapter from 'enzyme-adapter-react-16';
// tslint:disable-next-line:ordered-imports
import {configure, shallow} from 'enzyme';
import BMIForm from '../components/BMIForm';

configure({ adapter: new Adapter() });

describe('FirstComponent test', () => {
    it('should generate the correct result when we click on submit button',() =>{
        // tslint:disable-next-line:no-unused-expression
        
        const component = shallow(<BMIForm />);
        component.setState({height: 1.6, weight:48});
        component.find('#result').simulate('click',{
            preventDefault: jest.fn(),
            target: {
                id: 'result'
                
            },
        });
       expect(component.state().result).toBeCloseTo(18.749)
    });
        
        
      it('should pass a selected value to the onChange function', () => {
        const component = shallow(<BMIForm />);
        component.find('#height').simulate('change', { target: {id: 'height', 
          value:1.6 }
        });
        
        expect(component.state().height).toEqual(1.6);
      });
    
      it('should pass a selected value to the onChange function', () => {
        const component = shallow(<BMIForm />);
        component.find('#weight').simulate('change', { target: {id: 'weight', 
          value:48 }
        });
        
        expect(component.state().weight).toEqual(48);
      });

      it('should calculate bmi', () => {
        const component = shallow(<BMIForm />);
        const instance = component.instance() as BMIForm;
        
        expect(instance.calculateBmi(1.6, 48)).toBeCloseTo(18.749);
      })
});
