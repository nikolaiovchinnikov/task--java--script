export const isEmptyObjAppendToDictAndMessage = (localListItems) => {
    const StoragListItems = localStorage.getItem("listItems");
    if (StoragListItems !== null) {
        let localStoragelistItemsParse = JSON.parse(StoragListItems);
        for (let key of localStoragelistItemsParse) {
            $(key).appendTo('.main_list_contener');
            localListItems.push(key);
        }
    }
    return false;
};
//# sourceMappingURL=appendToDictAndIsEmptyObj.js.map