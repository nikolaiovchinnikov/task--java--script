export const getElement = (id : string, message : string, size:number, date:string,countryValueTag:string ,img:string):void => {
    $( $.parseHTML( `<div id=${id} class="main_list_contener_element"><div class="main_list_contener_element_title"><p class="main_list_element_title_contener_contener">Post <span># ${size} </span>at <span>${date} </span>begin in <span>${countryValueTag} </span><img src="${img}" alt="" height="10"></p><a class="remove" href="#">Remove</a></div><div class="main_list_contener_element_hr"></div><div class="main_list_contener_element_text"><p id="text0">${message}</p></div></div>` ) ).appendTo( ".main_list_contener" );
}
