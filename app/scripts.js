document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        
        const data = {
            'entry.1567639407': formData.get('name'),
            'entry.227541770': formData.get('email'),
            'entry.1997340808': formData.get('message')
        };
        
        const queryString = new URLSearchParams(data).toString();
        const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSect8lp_A57waZgIB9kdOC8nQaSjAMyTeVUXsO4vCdDl9RW7w/formResponse?${queryString}`;
        
        fetch(googleFormUrl, {
            method: 'POST',
            mode: 'no-cors'
        }).then(() => {
            alert('Your message has been sent successfully!');
            form.reset();
        }).catch((error) => {
            console.error('Error!', error.message);
        });
    });
});
