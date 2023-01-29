const checkID = (item, action) => {
    return action.payload === item.id
};

export default checkID;