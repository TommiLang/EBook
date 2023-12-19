window.addEventListener('DOMContentLoaded', () => {
    function hideForms() {
        const registerForm = document.querySelector('.registration-container');
        const loginForm = document.querySelector('.login-container');

        if (registerForm.classList.contains('active-form')) {
            registerForm.classList.remove('active-form');
        }
        if (loginForm.classList.contains('active-form')) {
            loginForm.classList.remove('active-form');
        }
    }

    hideForms();

    function showForms() {
        const btnRegister = document.querySelector('.button_register');
        const btnLogin = document.querySelector('.button_login');
        const registerForm = document.querySelector('.registration-container');
        const loginForm = document.querySelector('.login-container');

        btnRegister.addEventListener('click', (e) => {
            if(e.target.classList.contains('button_register')) {
                registerForm.classList.toggle('active-form')
            } 
            if(loginForm.classList.contains('active-form')) {
                loginForm.classList.remove('active-form');
            }
            e.stopPropagation();
        });
        btnLogin.addEventListener('click', (e) => {
            if(e.target.classList.contains('button_login')) {
                loginForm.classList.toggle('active-form')
            }
            if(registerForm.classList.contains('active-form')) {
                registerForm.classList.remove('active-form');
            }
            e.stopPropagation();
        });

        document.addEventListener('click', (e) => {
            const clickInsideFormRegister = registerForm.contains(e.target);
            const clickInsideFormLogin = loginForm.contains(e.target);
            if (!clickInsideFormRegister && !clickInsideFormLogin) {
                hideForms();
            }
        });
    }
    showForms()

    function showBooks() {
        const books = document.querySelectorAll('.book');
        const booksText = document.querySelectorAll('.book_text')

        function hiddenBooks() {
            booksText.forEach(text => {
                if(text.style.visibility === 'visible') {
                    text.style.visibility = 'hidden'
                    text.style.transition = 'all 0.1s ease-in-out';
                }
            })
        }
        hiddenBooks()
        
        books.forEach((item,index) => {
            item.addEventListener('click', (e) => {
                if(e.target.classList.contains('book')) {
                    hiddenBooks()
                    booksText[index].style.visibility = 'visible'
                    booksText[index].style.transition = 'all 1s ease-in-out';
                    if(!e.target.classList.contains('book')) {
                        booksText[index].style.visibility = 'hidden'
                    }
                    e.stopPropagation();
                }
            })
        })
        document.addEventListener('click', (e) => {
            const clickInsideBook = e.target.classList.contains('book') || e.target.closest('.book');
            if (!clickInsideBook) {
                hiddenBooks();
            }
        });
    }
    showBooks()
});
