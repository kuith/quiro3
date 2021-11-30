import ImgServiciosQuiromasaje from '../../util/imagenes/servicios/quiromasaje.png';
import ImgServiciosOsteopatia from '../../util/imagenes/servicios/osteopatia.png';
import ImgServiciosPresoterapia from '../../util/imagenes/servicios/presoterapia.png';
import ImgServiciosDeportivo from '../../util/imagenes/servicios/deportivo.png';
import ImgServiciosDietetico from '../../util/imagenes/servicios/dietetico.png';
import ImgServiciosBonos from '../../util/imagenes/servicios/bonos.png';
import ImgServiciosFacial from '../../util/imagenes/servicios/facial.png';
import ImgServiciosTatoo from '../../util/imagenes/servicios/tatoo.png';

const quiromasaje = {
    imagen: ImgServiciosQuiromasaje,
    textoImagen: "Quiromasaje es una forma de masaje manual procedente del masaje sueco cuya técnica se basa en amasar, frotar y golpear las partes superficiales del cuerpo con las manos.",
    subtextoImagen:"La aplicación de vendaje neuromuscular no varía el precio.",
    quiromasajeDeportivo: 30,
    quiromasajeRelajante: 30,
    quiromasajeCirculatorio: 30,
    quiromasajeDescontracturante: 30,
    quiromasajeRecuperador: 30,
    quiromasajeDeportistas: 25,
    quiromasajeJubilados: 30,
}

const osteopatia = {
    imagen:ImgServiciosOsteopatia,
    textoImagen:"Método de tratamiento de las dolencias que se basa en los masajes y la manipulación de las articulaciones; se fundamenta en la teoría de que el cuerpo es capaz de elaborar sus propios remedios contra las enfermedades.",
    subtextoImagen:"Se aplica gratuitamente a criterio profesional. No varía el precio del masaje."
}

const presoterapia = {
    imagen: ImgServiciosPresoterapia,
    textoImagen:"La presoterapia estimula el sistema linfático, generando un drenaje linfático, con el objetivo de eliminar líquidos, grasas y toxinas acumuladas en el organismo beneficiando la circulacion.",
    subtextoImagen:"",
    presoterapiaSesion: 30
}

const deportivo = {
    imagen: ImgServiciosDeportivo,
    textoImagen:"¿Quieres una tabla de ejercicios? ¿Alguien que te asesore sobre tus entrenamientos? Ven y cuentanos tus propósitos.",
    subtextoImagen:"Rutinas para entrenamiento personalizadas.",
    volumen: 20,
    tonificacion: 20
}

const dietetico = {
    imagen: ImgServiciosDietetico,
    textoImagen:"¿Quieres ganar o perder peso? Ven a vernos no te arrepentiras.",
    subtextoImagen:"",
    primera: 25,
    seguimiento: 20
}

const bonos = {
    imagen: ImgServiciosBonos,
    textoImagen:"Siempre biene bien ahorrarse un dinero o tambien como regalo...regala salud.",
    subtextoImagen:"Bonos de seguimientos completos.",
    bonoMasajes3: 76,
    bonoMasajes6: 147,
    bonoMasajes10: 220,
    bonoAnticelulitico: 160,
    bonoDieta: 35
}

const facial = {
    imagen: ImgServiciosFacial,
    textoImagen: "Haz un regalo original para ocasiones especiales.",
    subtextoImagen:"",
    facial: 60
}

const tatoo = {
    imagen: ImgServiciosTatoo,
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
