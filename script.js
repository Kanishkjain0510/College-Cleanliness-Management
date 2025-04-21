document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const showSignupLink = document.getElementById('showSignup');
    const showLoginLink = document.getElementById('showLogin');
    const userTypeSelect = document.getElementById('userType');
    const emailFields = document.querySelectorAll('.email-field');
    const workerIdField = document.querySelector('.worker-id-field');

    // Form switch animation
    function switchForm(hideForm, showForm) {
        hideForm.style.opacity = '0';
        hideForm.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            hideForm.classList.remove('active');
            showForm.classList.add('active');
            
            setTimeout(() => {
                showForm.style.opacity = '1';
                showForm.style.transform = 'translateY(0)';
            }, 50);
        }, 300);
    }

    // Event Listeners for form switching
    showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        switchForm(loginForm, signupForm);
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        switchForm(signupForm, loginForm);
    });

    // Handle user type changes
    userTypeSelect.addEventListener('change', () => {
        const isWorker = userTypeSelect.value === 'worker';
        
        emailFields.forEach(field => {
            field.style.display = isWorker ? 'none' : 'block';
        });
        
        if (workerIdField) {
            workerIdField.style.display = isWorker ? 'block' : 'none';
        }
    });

    // Form submission handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const userType = userTypeSelect.value;
            if (userType == 'student/Faculty Staff') {
                window.location.href = '/home/kanishk-jain/Desktop/Code Quarantine/DBMS/dashboards/student-dashboard.html';
            } else if (userType == 'Cleanliness Worker') {
                window.location.href = '/home/kanishk-jain/Desktop/Code Quarantine/DBMS/dashboards/admin-dashboard.html';
            } else if (userType == 'Admin') {
                window.location.href = '/home/kanishk-jain/Desktop/Code Quarantine/DBMS/dashboards/admin-dashboard.html';
            }
        });
    });
});