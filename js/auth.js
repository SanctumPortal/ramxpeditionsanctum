const {
    app,
    auth,
    db,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
    doc,
    getDoc,
    setDoc
} = window.firebase;

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');
    const userInfo = document.getElementById('user-info');
    const userName = document.getElementById('user-name');
    const userPhoto = document.getElementById('user-photo');

    const provider = new GoogleAuthProvider();

    loginButton.addEventListener('click', () => {
        signInWithPopup(auth, provider)
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

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const userRef = doc(db, 'users', user.uid);
            getDoc(userRef).then((docSnap) => {
                if (docSnap.exists()) {
                    updateUserInfo(docSnap.data());
                } else {
                    updateUserInfo(user);
                }
            });
        } else {
            updateUserInfo(null);
        }
    });

    function updateUserInfo(user) {
        if (user) {
            userInfo.style.display = 'block';
            loginButton.style.display = 'none';
            userName.textContent = user.displayName;
            userPhoto.src = user.photoURL;

            const logoutButton = document.getElementById('logout-button');
            logoutButton.addEventListener('click', () => {
                signOut(auth).then(() => {
                    updateUserInfo(null);
                });
            });
        } else {
            userInfo.style.display = 'none';
            loginButton.style.display = 'block';
            userName.textContent = '';
            userPhoto.src = '';
        }
    }

    function saveUserToFirestore(user) {
        if (!user) return;

        const userRef = doc(db, 'users', user.uid);

        setDoc(userRef, {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            lastLogin: new Date()
        }, { merge: true });
    }
});