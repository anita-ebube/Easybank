function myFunction() {
    const toggleButton = document.querySelector('.navbar-toggle-button');
    const menu = document.getElementById('myLinks');

    toggleButton.classList.toggle('active');
    menu.classList.toggle('active');
}
