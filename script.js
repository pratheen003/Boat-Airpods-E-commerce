// Mobile Menu Toggle
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Scroll to Products
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Registration Form Validation
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    
    let isValid = true;
    
    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    
    // Name validation
    if (name.length < 3) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters';
        isValid = false;
    }
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }
    
    // Password validation
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        isValid = false;
    }
    
    if (isValid) {
        alert('Registration successful! Welcome, ' + name + '!');
        this.reset();
    }
});

// Login Modal
function showLogin() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

// Login Form Validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }
    
    alert('Login successful!');
    closeLogin();
    this.reset();
});

// Wishlist Functionality
let wishlist = [];

function addToWishlist(productName) {
    if (!wishlist.includes(productName)) {
        wishlist.push(productName);
        updateWishlist();
        alert(productName + ' added to wishlist!');
    } else {
        alert(productName + ' is already in your wishlist!');
    }
}

function updateWishlist() {
    const wishlistDiv = document.getElementById('wishlistItems');
    if (wishlist.length === 0) {
        wishlistDiv.innerHTML = '<p>Your wishlist is empty. Add products to get started!</p>';
    } else {
        wishlistDiv.innerHTML = '<ul style="list-style: none; max-width: 600px; margin: 0 auto;">' + 
            wishlist.map(item => '<li style="background: white; padding: 1rem; margin: 0.5rem 0; border-radius: 5px;">🎧 ' + item + '</li>').join('') + 
            '</ul>';
    }
}

// Report Issue Form
document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('reportName').value.trim();
    const issue = document.getElementById('reportIssue').value.trim();
    
    if (name.length < 3) {
        alert('Please enter your name (minimum 3 characters)');
        return;
    }
    
    if (issue.length < 10) {
        alert('Please describe your issue in detail (minimum 10 characters)');
        return;
    }
    
    alert('Thank you for reporting! We will get back to you soon.');
    this.reset();
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target == modal) {
        closeLogin();
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                document.getElementById('navMenu').classList.remove('active');
            }
        }
    });
});
