import ImgCarruselQuiromasaje from '../utils/images/carrusel/C_Quiromasaje.png'
import ImgCarruselOsteopatia from '../utils/images/carrusel/C_Osteopatia.png';
import ImgCarruselPresoterapia from '../utils/images/carrusel/C_Presoterapia.png';
import ImgCarruselDeportivo from '../utils/images/carrusel/C_Deportivo.png';
import ImgCarruselDietetico from '../utils/images/carrusel/C_Dietetico.png';
import ImgCarruselBonos from '../utils/images/carrusel/C_Bonos.png';
import ImgCarruselFacial from '../utils/images/carrusel/C_Facial.png';
import ImgCarruselTatoo from '../utils/images/carrusel/C_Tatoo.png';


//Quiromasaje
const carruselQuiromasaje = {
  imagenCarrusel: ImgCarruselQuiromasaje,
  titulo: "Quiromasaje",
  precioCarrusel: "22",
  aclaracion: "(Con bono de 10)",
  texto: "Método de exploración (mediante la palpación) y de tratamiento manual, aplicado sobre la cubierta corporal.",
  servicio: "quiromasaje"
}

//osteopatia
const carruselOsteopatia = {
  imagenCarrusel: ImgCarruselOsteopatia,
  titulo: "Osteopatía",
  precioCarrusel: "22",
  aclaracion: "(Con bono de 10)",
  texto: "Tratamiento de dolencias basado en masajes y manipulación de articulaciones beneficiando tu salud.",
  servicio: "osteopatia"
}

//presoterapia
const carruselPresoterapia = {
  imagenCarrusel: ImgCarruselPresoterapia,
  titulo: "Presoterapia",
  precioCarrusel: "22",
  aclaracion: "(Con bono de 10)",
  texto: "Utiliza la presión de aire, a modo de masaje, activando el sistema linfático mejorando la circulación.",
  servicio: "presoterapia"
}

//asesoramiento deportivo
const carruselDeportivo = {
  imagenCarrusel: ImgCarruselDeportivo,
  titulo: "Asesoramiento deportivo",
  precioCarrusel: "20",
  texto: "Déjate asesorar por nuestros expertos, notarás un gran cambio",
  servicio: "deportivo"
}

//asesoramiento dietetico
const carruselDietetico = {
  imagenCarrusel: ImgCarruselDietetico,
  titulo: "Asesoramiento dietético",
  precioCarrusel: "20",
  texto: "Una buena alimentación te hara sentir bien y mejorar tu cuerpo.",
  servicio: "dietetico"
}

//bonos
const carruselBonos = {
  imagenCarrusel: ImgCarruselBonos,
  titulo: "Bonos",
  precioCarrusel: "76",
  texto: "Ahorra o regala bienestar. Te lo agradecerán.",
  servicio: "bonos"
}

//rejuvenecimeinto facial
const carruselRejuvenecimiento = {
  imagenCarrusel: ImgCarruselFacial,
  titulo: "Rejuvenecimiento facial laser",
  precioCarrusel: "60",
  texto: "Limpieza de anomalías de la piel, envejecimiento o manchas solares.",
  servicio: "rejuvenecimiento"
}

//eliminacion tatuajes
const carruselTatoo = {
  imagenCarrusel: ImgCarruselTatoo,
  titulo: "Sesión de eliminación de tatuajes",
  precioCarrusel: "60 / 80",
  texto: "Tatuajes de todo tamaño y color.",
  servicio: "tatoo"
}

export {
  carruselQuiromasaje,
  carruselOsteopatia,
  carruselPresoterapia,
  carruselDeportivo,
  carruselDietetico,
  carruselBonos,
  carruselRejuvenecimiento,
  carruselTatoo
}