import React from 'react';
import {shallow} from 'enzyme';
import ListItem from './ListItem';

describe('ListItem', () => {
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
    wrapper = shallow(<ListItem vehicle={vehicle} />)
  });

  it('should render a wrapper <li />', () => {
    expect(wrapper.find('li').length).toEqual(1);
  });
})