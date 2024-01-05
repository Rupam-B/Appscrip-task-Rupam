const SidebarinitialState = 0;

const OpenCloseSidebar = (state = SidebarinitialState, action) => {
    if (action.type === "OPEN-CLOSE") {
        return action.payload; 
    } else {
        return state;
    }
}

export default OpenCloseSidebar;
