
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');
    const userInfo = document.getElementById('user-info');
    const userName = document.getElementById('user-name');
    const userPhoto = document.getElementById('user-photo');

    const provider = new firebase.auth.GoogleAuthProvider();

    loginButton.addEventListener('click', () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                updateUserInfo(user);
                saveUserToFirestore(user);
            })
            .catch((error) => {
                console.error(error);
            });
    });

    logoutButton.addEventListener('click', () => {
        auth.signOut().then(() => {
            updateUserInfo(null);
        });
    });

    auth.onAuthStateChanged((user) => {
        updateUserInfo(user);
    });

    function updateUserInfo(user) {
        if (user) {
            userInfo.style.display = 'block';
            loginButton.style.display = 'none';
            userName.textContent = user.displayName;
            userPhoto.src = user.photoURL;
        } else {
            userInfo.style.display = 'none';
            loginButton.style.display = 'block';
            userName.textContent = '';
            userPhoto.src = '';
        }
    }

    function saveUserToFirestore(user) {
        if (!user) return;

        const userRef = db.collection('users').doc(user.uid);

        userRef.get().then((doc) => {
            if (!doc.exists) {
                userRef.set({
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    lastLogin: new Date()
                });
            }
        });
    }
});
