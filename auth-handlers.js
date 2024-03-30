document.getElementById('logoutBtn').addEventListener('click', function () {
    const auth = firebase.auth();
    auth.signOut().then(() => {
        // Redirect to home page with a query parameter indicating logout success
        window.location.href = "home.html?logout=success";
    }).catch((error) => {
        // Handle errors here, such as displaying a message to the user
        console.error("Logout failed", error);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const logoutSuccess = urlParams.get('logout');

    if (logoutSuccess === 'success') {
        // Display a logout success message
        const messageElement = document.createElement('p');
        messageElement.textContent = "You have been successfully logged out.";
        document.body.insertBefore(messageElement, document.body.firstChild);
    }
});

// Assuming you've already imported the necessary Firebase modules and initialized your app

// Add a listener for the logout button
document.getElementById('logoutBtn').addEventListener('click', function() {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("Logged out successfully");
        window.location.href = 'login.html'; // Redirect to login page
    }).catch((error) => {
        // An error happened.
        console.error("Logout failed", error);
    });
});