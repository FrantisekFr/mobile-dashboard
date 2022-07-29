

export const storageSave = (key, str, storage) => {
   if(!storage){
      storage = 'sessionStorage';
   }
    if (check(storage)) {
       window[storage][key] = str;
    }
}

export const storageLoad = (key, storage) => {
   if(!storage){
      storage = 'sessionStorage';
   }
    if (check(storage)) {
        try {
          return JSON.parse(window[storage][key]);
        } catch (e) {
            return "not found";
        }
    } else {
        return {};
    }
}

export const storageRemove = (key, storage) => {
   if(!storage){
      storage = 'sessionStorage';
   }
    try {
     window[storage].removeItem(key);
    } catch (e) {
        return {};
    }
}

export const check = (type) => {
   if(!type){
      type = 'sessionStorage';
   }
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return false;
    }
}