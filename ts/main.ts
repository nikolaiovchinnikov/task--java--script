import { getElement } from "./getMessage.js";
import { getAjax } from "./ajax.js";
import { isEmptyObjAppendToDictAndMessage } from "./appendToDictAndIsEmptyObj.js";

let listItems : string[] = [];


const htmlAreaElements : NodeListOf<HTMLTextAreaElement> | HTMLInputElement = document.querySelectorAll( "#textArea, #calendar, #country");
const formElement : HTMLFormElement | null = document.querySelector( "#form_main_text" );


isEmptyObjAppendToDictAndMessage(listItems);


if ( formElement === null ) {
    console.log( "nullError" );
    throw "stop"; 
}

$(document).on("click", ".header_icon_blok_cross", function(event){
    let isdel = confirm("Вы действительно хотите удалить все записи?");
    if(isdel){
        localStorage.clear();
        listItems = [];
    }
});



formElement.addEventListener("submit", (e)=>{
    e.preventDefault();
    let size = listItems.length;
    let elemntNumber :string = "element" + size;
    let message:string = htmlAreaElements[2].value;
    let date:string = htmlAreaElements[1].value;
    let countryValueTag:string = htmlAreaElements[0].value;
    let country = getAjax( countryValueTag );
    let flag:string = country[0];
    getElement( elemntNumber, message, size, date, countryValueTag, flag );
    let element = $( `#${elemntNumber}` );
    listItems.push( new XMLSerializer().serializeToString(element[0]) );
    localStorage.setItem( "listItems", JSON.stringify(listItems) ) ;
});


$(document).on("click", ".remove", function(event){
    event.preventDefault();
    event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
    const StoragListItems = localStorage.getItem("listItems");
    if(StoragListItems){
        let localStoragelistItemsParse:string[] = JSON.parse((StoragListItems));
        for (let i in localStoragelistItemsParse) {
            if( localStoragelistItemsParse[i].indexOf(event.target.parentNode.parentNode.id) > -1 ){
                let filteredArray = localStoragelistItemsParse.filter((word, index, arr) => {
                    return index !== parseInt(i);
                });
                listItems = filteredArray;
                localStorage.setItem( "listItems", JSON.stringify(filteredArray) ) ;
            }
        }
    }
});

