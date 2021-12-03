import moment from 'moment'

export const calculateSumOfNumbers = function calculateSumOfNumbers(numbers) {
    let summ = 0;
    if(numbers?.length) {        
        numbers.forEach(element => {
            summ += element;
        });        
    }
    return summ;
}

export const getFormattedTime = function getFormattedTime(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}