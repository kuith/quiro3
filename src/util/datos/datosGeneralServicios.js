import ImgQuiromasaje from '../images/serviciosGeneral/quiromasaje.png'
import ImgOsteopatia from '../images/serviciosGeneral/osteopatia.png'
import ImgPresoterapia from '../images/serviciosGeneral/presoterapia.png'
import ImgDeportivo from '../images/serviciosGeneral/deportivo.png'
import ImgDietetico from '../images/serviciosGeneral/dietetico.png'
import ImgBonos from '../images/serviciosGeneral/bonos.png'
import ImgFacial from '../images/serviciosGeneral/facial.png'
import ImgTatoo from '../images/serviciosGeneral/tatoo.png'


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
  imagen: ImgOsteopatia,
  titulo: "Osteopatía",
  precio: "22",
  aclaracion: "(Con bono de 10)",
  texto: "Tratamiento de dolencias basado en masajes y manipulación de articulaciones beneficiando tu salud.",
  servicio: "osteopatia",
  link:"/servicios/osteopatia"
}

//presoterapia
const gPresoterapia = {
  imagen: ImgPresoterapia,
  titulo: "Presoterapia",
  precio: "22",
  aclaracion: "(Con bono de 10)",
  texto: "Utiliza la presión de aire, a modo de masaje, activando el sistema linfático mejorando la circulación.",
  servicio: "presoterapia",
  link:"/servicios/presoterapia"
}

//asesoramiento deportivo
const gDeportivo = {
  imagen: ImgDeportivo,
  titulo: "Asesoramiento deportivo",
  precio: "20",
  texto: "Déjate asesorar por nuestros expertos, notarás un gran cambio",
  servicio: "deportivo",
  link:"/servicios/deportivo"
}

//asesoramiento dietetico
const gDietetico = {
  imagen: ImgDietetico,
  titulo: "Asesoramiento dietético",
  precio: "20",
  texto: "Una buena alimentación te hara sentir bien y mejorar tu cuerpo.",
  servicio: "dietetico",
  link:"/servicios/dietetico"
}

//bonos
const gBonos = {
  imagen: ImgBonos,
  titulo: "Bonos",
  precio: "76",
  texto: "Ahorra o regala bienestar. Te lo agradecerán.",
  servicio: "bonos",
  link:"/servicios/bonos"
}

//rejuvenecimeinto facial
const gRejuvenecimiento = {
  imagen: ImgFacial,
  titulo: "Rejuvenecimiento facial laser",
  precio: "60",
  texto: "Limpieza de anomalías de la piel, envejecimiento o manchas solares.",
  servicio: "rejuvenecimiento",
  link:"/servicios/facial"
}

//eliminacion tatuajes
const gTatoo = {
  imagen: ImgTatoo,
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