import '../css/estilos.css';

export const saludar = (nombre) =>{
    console.log('creando etiqueta h1, en el html');

    const h1=document.createElement('h1');
    h1.innerText=`hola,${nombre}, como estas`;
    document.body.append(h1);
}