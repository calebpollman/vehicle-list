import React from 'react';
import {shallow} from 'enzyme';
import ListDetail from './ListDetail';
import List from '../List/List';

describe('ListDetail', () => {
  let wrapper;
  const vehicle = {
    "id": 0,
    "year" : "2013",
    "make" : "Kia",
    "model" : "Optima",
    "mileage" : 24235,
    "drivetrain" : "FWD",
    "bodytype" : "sedan",
    "image_url" : "http://www.optimaforums.com/forum/attachments/new-member-introductions/11137d1347548855-new-2013-kia-optima-sx-l-titanium-photo.jpg",
    "created_at" : "2016-10-14T20:13:22.586Z"
  }

  beforeEach(() => {
    wrapper = shallow(<ListDetail vehicle={vehicle} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a wrapper <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});