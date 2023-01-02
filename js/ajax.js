export const getAjax = (countryValueTag) => {
    let countryList = [];
    $.ajax({
        async: false,
        dataType: "json",
        method: 'GET',
        url: `https://restcountries.com/v2/name/${countryValueTag}`,
        success: (response) => {
            const country = response[0];
            countryList.push(country.flag);
        },
        error: (error) => {
            console.log(error);
        }
    });
    return countryList;
};
//# sourceMappingURL=ajax.js.map