document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                nav.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !nav.contains(e.target)) {
                mobileMenuBtn.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    }

    // Auto-open popup immediately on page load
    const popup = document.getElementById('enquiryPopup');
    if (popup && !popup.classList.contains('closed')) {
        popup.classList.add('active');
    }
});

function openEnquiryForm(configType) {
    const popup = document.getElementById('enquiryPopup');
    const select = document.querySelector('#popup-configuration');

    if (popup && select) {
        popup.classList.add('active');
        if (configType === '3 BHK') {
            select.value = '3 BHK';
        } else if (configType === '3 BHK + Study') {
            select.value = '3 BHK + Study';
        } else if (configType === '4 BHK') {
            select.value = '4 BHK';
        } else if (configType === '4 BHK + Servant') {
            select.value = '4 BHK + Servant';
        }
    }
}

function closePopup() {
    const popup = document.getElementById('enquiryPopup');
    if (popup) {
        popup.classList.remove('active');
        popup.classList.add('closed');
    }
}

function openPopup() {
    const popup = document.getElementById('enquiryPopup');
    if (popup) {
        popup.classList.add('active');
    }
}

function openThankYou() {
    const thankYouModal = document.getElementById('thankYouModal');
    if (thankYouModal) {
        thankYouModal.classList.add('active');
    }
}

function closeThankYou() {
    const thankYouModal = document.getElementById('thankYouModal');
    if (thankYouModal) {
        thankYouModal.classList.remove('active');
    }
}

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('enquiryForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            // FormSubmit will handle the submission
            // Show thank you modal after a short delay
            setTimeout(function() {
                closePopup();
                openThankYou();
            }, 1000);
        });
    }
});
