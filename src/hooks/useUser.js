function useUser() {
    function createUser(newUser) {
        return newUser;
    }

    function editUser(userIndex, userEdited, usersList) {
        const updatedUsers = usersList;
        const user = updatedUsers.at(userIndex);

        Object.assign(user, userEdited);

        return updatedUsers;
    }

    function removeUser(userIndex, usersList) {
        const updatedUsers = usersList;
        
        updatedUsers.splice(userIndex, 1);

        return updatedUsers;
    }

    return [ createUser, editUser, removeUser ];
}

export default useUser;