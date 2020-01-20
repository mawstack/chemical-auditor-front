export const createRecord = (record = {}) => {
    return {
        type: "CREATE_RECORD",
        payload: record
    }
}

//api calling records = from here with thunk
//form entry = via arguments