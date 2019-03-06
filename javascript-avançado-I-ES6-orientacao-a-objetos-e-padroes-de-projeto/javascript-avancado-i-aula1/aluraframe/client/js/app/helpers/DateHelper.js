class DateHelper {

    constructor() {
        throw new Error("This class can't be instantiated");
    }

    static dateToText(date) {

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    static textToDate(text) {

        let expressaoDataValida = /^\d{4}-\d{2}-\d{2}$/

        if (!expressaoDataValida.test(text))
            throw new Error('Invalid date format. The parameter must be yyyy-mm-dd')

        return new Date(...text.split('-').map((item, indice) => item - indice % 2));
    }
}