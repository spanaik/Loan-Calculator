const Instalment = {
    calculate : (amount, tenure) => {
        const URI = `https://ftl-frontend-test.herokuapp.com/interest?amount=${amount}&numMonths=${tenure}`
        return fetch(URI)
        .then(response => response.json())
        .then(jsonResponse => jsonResponse ? jsonResponse : null);
    }
}

export default Instalment;