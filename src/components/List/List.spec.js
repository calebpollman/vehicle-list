import React from 'react';
import {shallow} from 'enzyme';
import List from './List';

describe('List', () => {
  let wrapper;
  const vehicles = [
    {
      "id": 0,
      "year" : "2013",
      "make" : "Kia",
      "model" : "Optima",
      "mileage" : 24235,
      "drivetrain" : "FWD",
      "bodytype" : "sedan",
      "image_url" : "http://www.optimaforums.com/forum/attachments/new-member-introductions/11137d1347548855-new-2013-kia-optima-sx-l-titanium-photo.jpg",
      "created_at" : "2016-10-14T20:13:22.586Z"
    },
    {
      "id": 1,
      "year" : "2013",
      "make" : "Hyundai",
      "model" : "Accent",
      "mileage" : 21587,
      "drivetrain" : "FWD",
      "bodytype" : "sedan",
      "image_url" : "http://www.conceptcarz.com/images/Hyundai/2013-Hyundai-Accent-Sedan-Image-01.jpg",
      "created_at" : "2016-11-14T20:13:22.586Z"
    },
  ];

  beforeEach(() => {
    wrapper = shallow(
      <List 
        listLoading={false} 
        searchActive={false} 
        searchResults={[]} 
        vehicles={vehicles} 
      />
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a wrapper <ul />', () => {
    expect(wrapper.find('ul').length).toEqual(1);
  });

  it('should render an instance of <ListItem /> for each index of vehicles', () => {
    expect(wrapper.find('ListItem').length).toEqual(vehicles.length);
  });
});