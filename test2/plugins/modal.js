function creatModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
   <div class="modal-overlay">  
       <div class="modal-window">
           <div class="modal-header">
           <span class="modal-title">Modal title</span>
           <span class="modal-close">&times;</span>
           </div>

           <div class="modal-body">
               <p> Прощу помощи в расширении функционала стандартного модального окна </p>
               <p>Прощу помощи в расширении функционала стандартного модального окна </p>
           </div>

           <div class="modal-footer">
               <button>Ok</button>
               <button>Cancel</button>

           </div>

       </div>
   </div> 
   `)
   document.body.appendChild(modal)
   return modal
}

$.modal = function(options) {
    const $modal = _createModal(options)
return{
    open() {
        $modal.classList.add('open')
    },
    close() {},
    destroy() {}
}
}
