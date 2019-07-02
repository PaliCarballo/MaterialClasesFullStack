// window.addEventListener('load', function(){
//     var input = document.querySelector('input');
//     input.getAttribute('value');
    //console.log(input);

    

window.addEventListener('load', function(){

    var btn = document.querySelector('form button');

    btn.addEventListener('click', function(){

        var input = document.querySelector('input');

        var ul = document.querySelector('ul');

        var li = document.createElement('li');

        li.innerHTML = input.value + '<a href="#">Eliminar</a>';

       ul.append(li);
        input.value = '';
       li.children[0].onclick = function() {
           ul.removeChild(this.parentElement);
           if(ul.children.length === 0){
                alert('Has cumplido todas tus tareas');
           }

       }
    })


    // var lis = ul.children;

    // for (li of lis) {
    //     li.children[0].onclick = function() {
    //         ul.removeChild(this.parentElement);
    //     }
    // }

    


});