import * as React from "react";
// tslint:disable-next-line:ordered-imports
import {configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
// tslint:disable-next-line:ordered-imports
import { shallow } from 'enzyme';
import Headline from '../components/Headline';

describe('FirstComponent', () => {
    test('render a label', () => {
        const wrapper = shallow( <Headline /> );
        expect(wrapper).toMatchSnapshot();
    });
  });
