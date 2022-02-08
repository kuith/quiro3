/* import ImgCarruselQuiromasaje from '../utils/images/carrusel/C_Quiromasaje.png'
import ImgCarruselOsteopatia from '../utils/images/carrusel/C_Osteopatia.png';
import ImgCarruselPresoterapia from '../utils/images/carrusel/C_Presoterapia.png';
import ImgCarruselDeportivo from '../utils/images/carrusel/C_Deportivo.png';
import ImgCarruselDietetico from '../utils/images/carrusel/C_Dietetico.png';
import ImgCarruselBonos from '../utils/images/carrusel/C_Bonos.png';
import ImgCarruselFacial from '../utils/images/carrusel/C_Facial.png';
import ImgCarruselTatoo from '../utils/images/carrusel/C_Tatoo.png'; */

import ImgQuiromasaje from '../images/landing/instalaciones.png'

//Quiromasaje
const gQuiromasaje = {
  imagen: ImgQuiromasaje,
  titulo: "Quiromasaje",
  precio: "22",
  aclaracion: "(Con bono de 10)",
  texto: "Método de exploración (mediante la palpación) y de tratamiento manual, aplicado sobre la cubierta corporal.",
  servicio: "quiromasaje",
  link:"/servicios/quiromasaje"
}

//osteopatia
const gOsteopatia = {
  imagen: ImgQuiromasaje,
  titulo: "Osteopatía",
  precio: "22",
  aclaracion: "(Con bono de 10)",
  texto: "Tratamiento de dolencias basado en masajes y manipulación de articulaciones beneficiando tu salud.",
  servicio: "osteopatia",
  link:"/servicios/osteopatia"
}

//presoterapia
const gPresoterapia = {
  imagen: ImgQuiromasaje,
  titulo: "Presoterapia",
  precio: "22",
  aclaracion: "(Con bono de 10)",
  texto: "Utiliza la presión de aire, a modo de masaje, activando el sistema linfático mejorando la circulación.",
  servicio: "presoterapia",
  link:"/servicios/presoterapia"
}

//asesoramiento deportivo
const gDeportivo = {
  imagen: ImgQuiromasaje,
  titulo: "Asesoramiento deportivo",
  precio: "20",
  texto: "Déjate asesorar por nuestros expertos, notarás un gran cambio",
  servicio: "deportivo",
  link:"/servicios/deportivo"
}

//asesoramiento dietetico
const gDietetico = {
  imagen: ImgQuiromasaje,
  titulo: "Asesoramiento dietético",
  precio: "20",
  texto: "Una buena alimentación te hara sentir bien y mejorar tu cuerpo.",
  servicio: "dietetico",
  link:"/servicios/dietetico"
}

//bonos
const gBonos = {
  imagen: ImgQuiromasaje,
  titulo: "Bonos",
  precio: "76",
  texto: "Ahorra o regala bienestar. Te lo agradecerán.",
  servicio: "bonos",
  link:"/servicios/bonos"
}

//rejuvenecimeinto facial
const gRejuvenecimiento = {
  imagen: ImgQuiromasaje,
  titulo: "Rejuvenecimiento facial laser",
  precio: "60",
  texto: "Limpieza de anomalías de la piel, envejecimiento o manchas solares.",
  servicio: "rejuvenecimiento",
  link:"/servicios/facial"
}

//eliminacion tatuajes
const gTatoo = {
  imagen: ImgQuiromasaje,
  titulo: "Sesión de eliminación de tatuajes",
  precioCarrusel: "60 / 80",
  texto: "Tatuajes de todo tamaño y color.",
  servicio: "tatoo",
  link:"/servicios/tatoo"
}

export {
  gQuiromasaje,
  gOsteopatia,
  gPresoterapia,
  gDeportivo,
  gDietetico,
  gBonos,
  gRejuvenecimiento,
  gTatoo
}