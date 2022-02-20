import ImgServiciosQuiromasaje from '../images/servicios/quiromasaje.png';
import ImgServiciosOsteopatia from '../images/servicios/osteopatia.png';
/* import ImgServiciosPresoterapia from '../../util/imagenes/servicios/presoterapia.png';
import ImgServiciosDeportivo from '../../util/imagenes/servicios/deportivo.png';
import ImgServiciosDietetico from '../../util/imagenes/servicios/dietetico.png';
import ImgServiciosBonos from '../../util/imagenes/servicios/bonos.png';
import ImgServiciosFacial from '../../util/imagenes/servicios/facial.png';
import ImgServiciosTatoo from '../../util/imagenes/servicios/tatoo.png'; */ 

const quiromasaje = {
    titulo:"Quiromasaje",
    subtitulo1:"Quiromasaje es una forma de masaje manual procedente del masaje sueco cuya técnica se basa en amasar, frotar y golpear las partes superficiales del cuerpo con las manos.",
    subtitulo2:"",
    imagen: ImgServiciosQuiromasaje,
    subtextoImagen1:"La aplicación de vendaje neuromuscular no varía el precio.",
    subtextoImagen2:"",
    quiromasajeDeportivo: 30,
    quiromasajeRelajante: 30,
    quiromasajeCirculatorio: 30,
    quiromasajeDescontracturante: 30,
    quiromasajeRecuperador: 30,
    quiromasajeDeportistas: 25,
    quiromasajeJubilados: 30,
}

const osteopatia = {
    titulo: "Osteopatía",
    imagen:ImgServiciosOsteopatia,
    subtitulo1:"Método de tratamiento de las dolencias que se basa en los masajes y la manipulación de las articulaciones; se fundamenta en la teoría de que el cuerpo es capaz de elaborar sus propios remedios contra las enfermedades.",
    subtextoImagen1:"Se aplica gratuitamente a criterio profesional.",
    subtextoImagen2:" No varía el precio del masaje."
}

const presoterapia = {
    imagen: ImgServiciosQuiromasaje,
    textoImagen:"La presoterapia estimula el sistema linfático, generando un drenaje linfático, con el objetivo de eliminar líquidos, grasas y toxinas acumuladas en el organismo beneficiando la circulacion.",
    subtextoImagen:"",
    presoterapiaSesion: 30
}

const deportivo = {
    imagen: ImgServiciosQuiromasaje,
    textoImagen:"¿Quieres una tabla de ejercicios? ¿Alguien que te asesore sobre tus entrenamientos? Ven y cuentanos tus propósitos.",
    subtextoImagen:"Rutinas para entrenamiento personalizadas.",
    volumen: 20,
    tonificacion: 20
}

const dietetico = {
    imagen: ImgServiciosQuiromasaje,
    textoImagen:"¿Quieres ganar o perder peso? Ven a vernos no te arrepentiras.",
    subtextoImagen:"",
    primera: 25,
    seguimiento: 20
}

const bonos = {
    imagen: ImgServiciosQuiromasaje,
    textoImagen:"Siempre biene bien ahorrarse un dinero o tambien como regalo...regala salud.",
    subtextoImagen:"Bonos de seguimientos completos.",
    bonoMasajes3: 76,
    bonoMasajes6: 147,
    bonoMasajes10: 220,
    bonoAnticelulitico: 160,
    bonoDieta: 35
}

const facial = {
    imagen: ImgServiciosQuiromasaje,
    textoImagen: "Haz un regalo original para ocasiones especiales.",
    subtextoImagen:"",
    facial: 60
}

const tatoo = {
    imagen: ImgServiciosQuiromasaje,
    textoImagen:"Si te has cansado de tu tatuaje, recuerda que se puede eliminar.",
    subtextoImagen:"",
    tatoo: "60 / 80"
}

export {
    quiromasaje,
    osteopatia,
    presoterapia,
    deportivo,
    dietetico,
    bonos,
    facial,
    tatoo
}
