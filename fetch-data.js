document.addEventListener('DOMContentLoaded', function () {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a user list
            const userList = document.createElement('ul');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the user list to dataContainer
            dataContainer.appendChild(userList);
        } catch (error) {
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        }
    }

    fetchUserData();
});
