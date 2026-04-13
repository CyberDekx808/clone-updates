function promptDelete(form) {
    var pw = prompt('Enter your password to confirm deletion:');
    if (!pw) return false;
    form.querySelector('.delete-pw').value = pw;
    return true;
}