const moment = require('moment');
// 24/6/1948, 23/12/1975, 22/10/1988, 7/9/1985, 1/12/1986, 12/2/1988, 20/10/1986, 30/11/1984
let date, month, year;
let dateToday = moment().date(),
    monthToday = moment().month() + 1,
    yearToday = moment().year();

function ageVoter(dateBirthday) {
    
    date = moment(dateBirthday, "DD MM YYYY").date();
    month = moment(dateBirthday, "DD MM YYYY").month() + 1;
    year = moment(dateBirthday, "DD MM YYYY").year();

    let age = yearToday - year;

    if( month === monthToday ) {
        if( dateToday >= date ) {
            return age;
        } else {
            return age - 1;
        }
    } else if ( monthToday > month) {
        return age;
    } else {
        return age - 1;
    }


}

let edades = ['24/6/1948',' 23/12/1975', '22/10/1988', '7/9/1985', '1/12/1986', '12/2/1988', '20/10/1986', '30/11/1984'];

edades.forEach(nacimiento => {
    let edad = ageVoter(nacimiento);
    console.log(edad);
});