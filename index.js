//Programamos logica para dirigir el coche, con las flechas del teclado
let x=0, y=0;

const message  = document.getElementById('message');

const coche = document.getElementById('coche'),
        up = () => coche.style.transform = `translate(${x}%, ${y -= 30}%)`
        down = () => coche.style.transform = `translate(${x}%, ${y += 30}%)`
        right = () => coche.style.transform = `translate(${x += 30}%, ${y}%)`
        left = () => coche.style.transform = `translate(${x -= 30}%, ${y}%)`


        //Controlador de eventos!! Da funcionalidad a las teclas y también notifica la cantidad de pixeles por los que va pasando

        document.addEventListener('keydown', evento => {

            switch (evento.key) {
                case 'ArrowUp':
                    //este if bloquea que subas hacia arriba con el coche y salgas de pantalla
                    if(y<=1)return
                    up()
                    break
                case 'ArrowDown':
                    
                    console.log(y)
                    //Notifica que has llegado a los 1200 pixeles
                    if(y >= 1200 && y <= 1800){
                        message.innerHTML ='¡GENIAL! LLEVAS 1200 PÍXELES RECORRIDOS';
                        message.classList.add('is-active');
                    }
                
                    //Notifica los 2400 pixeles
                    if(y >= 2400 && y <= 3600){
                        message.innerHTML ='PERFECTO! LLEVAS 2400 PÍXELES RECORRIDOS';
                        message.classList.add('is-active');

                    }
                    //notifica que se ha llegado a la meta
                    if(y >=3780){
                        
                        message.innerHTML ='¡¡¡ENHORABUENA!! HAS LLEGADO A LA META';
                        message.classList.add('is-active');

                        return
                       

                    }
                    down()
                    break
                case 'ArrowRight':
                    //No permite que el coche se salga por la derecha
                    if(x >= 30 ) return
                    right()
                    
                    break
                case 'ArrowLeft':
                    //No permite que el coche se salga por la izquierda
                    if(-x >= 160 ) return
                    left()
                    break


                   

            }
        })


        //Focus al coche para no perderlo de vista
        focus = function getFocus() {
            document.getElementById("coche").focus();
          }

    