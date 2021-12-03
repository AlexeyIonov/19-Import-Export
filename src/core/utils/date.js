import moment from 'moment';
import 'moment-precise-range-plugin';

export const getTodayDateFormat = (date) => {
    return moment(data).format("MMM Do YY");
}

export const getPresizeDateFifference = (form, to) => {
    const d1 = moment(from);
    const d2 = moment(to);
    return moment.preciseDiff(d1, d2);
}