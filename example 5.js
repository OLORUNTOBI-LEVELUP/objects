let getCurrentDay = function (callback) {
    let currDate = new Date();  {      
    callback(currDate, 'err');
   };
};




getCurrentDay(function (returnDay) {         
    console.log('Today is: ' + returnDay); });