// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue (driver, key, value) {
  return Object.assign ({}, driver,{ [key]: value});
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
 driver[key]=value;
 return driver;
}
function deleteFromDriverByKey(driver, key){
  const cristinaObj = Object.assign({},driver);
    
  delete cristinaObj[key];
  return newObj;
}
function destructivelyDeleteFromDriverByKey(){
  
}