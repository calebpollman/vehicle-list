const search = (vehicles, searchTerm) => {
  if (searchTerm.length > 0) {
    const searchTermArray = searchTerm.toLowerCase().split(' ');
  
    return recursiveSearch(vehicles, searchTermArray);
  }
  return vehicles;
}

const recursiveSearch = (vehicles, searchTermArray) => {
  while(searchTermArray.length > 0) {
    const searchKeys = ['year', 'make', 'model'];
    const results = [];
    const searchTerm = searchTermArray.shift();

    for (let vehicle of vehicles) {
      searchKeys.forEach(key => {
        if (vehicle[key].toLowerCase().includes(searchTerm)) results.push(vehicle);
      });
    }
    
    return recursiveSearch(results, searchTermArray);
  }
  return vehicles;
}

export default search;