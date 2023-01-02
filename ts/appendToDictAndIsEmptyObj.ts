export const isEmptyObjAppendToDictAndMessage = (localListItems:string[]):boolean => {
    const StoragListItems = localStorage.getItem("listItems")
    if ( StoragListItems !== null ) {
        let localStoragelistItemsParse:string[] = JSON.parse(StoragListItems)
        for (let key of localStoragelistItemsParse) {
            $(key).appendTo('.main_list_contener')
            localListItems.push(key)
        }
    }
    return false;
}