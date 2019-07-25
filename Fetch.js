getProducts = async () => {
    let url = ` https://cors-anywhere.herokuapp.com/https://strive-school-testing-apis.herokuapp.com/api/product/`
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + 'dXNlcjc6M1VVNWRZRnZlblJ1UlA3RQ==')
    var response = await fetch(url, { method: 'GET', headers: headers });
    response = await response.json();
    return response
}

getProduct = async id => {
    let url = ` https://cors-anywhere.herokuapp.com/https://strive-school-testing-apis.herokuapp.com/api/product/${id}`;
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + 'dXNlcjc6M1VVNWRZRnZlblJ1UlA3RQ==')
    var response = await fetch(url, { method: 'PUT', headers: headers });
    response = await response.json();
    return response
}

