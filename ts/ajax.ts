export const getAjax = (countryValueTag:string):Array<string> => {
    let countryList:Array<string> = [];
    $.ajax({
        async: false, 
        dataType:"json",
        method: 'GET',
        url: `https://restcountries.com/v2/name/${countryValueTag}`,
        success: (response) => {
            const country = response[0];
            countryList.push(country.flag)
        },
        error: (error) => {
            console.log(error);
        }
      });
    return countryList;

}
