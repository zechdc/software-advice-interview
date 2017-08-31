class Modal {

  constructor(options) {
    this.modalSelector = options.modalSelector || 'js-modal';
    this.closeSelector = options.closeSelector || 'js-modal-close';

    this.registerEvents();
  }

  registerEvents() {
    let modal = document.getElementsByClassName(this.modalSelector);
    modal.addEventListener('click', function(){
      modal.classList.add('u-hidden');
    });
  }

}