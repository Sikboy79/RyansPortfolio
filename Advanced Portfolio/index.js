
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_345n2pr',
            'template_m7v3y0c',
            event.target,
            'pvxN8t768FOHETBn3'
        ).then(() => {
          loading.classList.remove("modal__overlay--visible");
          success.classList += " modal__overlay--visible";
        }).catch(() => {
          loading.classList.remove("modal__overlay--visible");
          alert(
            "the email is temporarily unavailable. please contact me directly at Custombasewelds@yahoo.com"
            );
        })
    }

    let isModalOpen = false;
    function toggleModal() {
        if (isModalOpen) {
          isModalOpen = false;
          return document.body.classList.remove("modal--open");
        }
        isModalOpen = true;
        document.body.classList += " modal--open";
    }