import React,{useState} from 'react'
import './Registro.css'
import { useCartContext } from '../../CartContext'
import { collection, addDoc } from "firebase/firestore";
import firestoreDB from "../../services/firebase";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


function Registro() {
  const [userData, setUserData] = useState ({
    name:"",
    apellido:"",
    usuario:"",
    email:"",
    telefono:"",
    direccion:"",
    zip:""
  });

  const [orderId, setOrderId] = useState(false)
  
  const {cart, precioTotal, clear} = useCartContext (); 
  const ordenDeCompra = {
    buyer: { ...userData},
    items: [...cart],
    total: precioTotal(),
    date: new Date(),
  };

  async function handleSubmit(evt){
evt.preventDefault();
const collectionRef = collection(firestoreDB, "orders");
    const order = await addDoc(collectionRef, ordenDeCompra);    
  setOrderId(orderId)
    const MySwal = withReactContent(Swal)
   MySwal.fire({
      icon: 'success',
      title: `Compra realizada con éxito id ${order.id}`,
      text: 'Gracias por su compra',
      })
   setTimeout(() => {
  clear();
  setOrderId(true);
}, 4000);
}

function inputChangeHandler(evt){
  const input = evt.target;
  const value = input.value;
  const inputName = input.name;
  
  let copyUserData = { ...userData };
  
  copyUserData[inputName] = value;
  setUserData(copyUserData);
  
  }

  return (
    <div className="col-md-7 col-lg-8 centrado">
            <h4 class="mb-3">Dirección de envio</h4>
            <form onClick={handleSubmit} class="needs-validation" novalidate/>
              <div class="row g-3">
                <div class="col-sm-6">
                  <label htmlFor="firstName" class="form-label">Nombre</label>
                  <input value={userData.name} onChange={inputChangeHandler} type="text" class="form-control" name="name" placeholder="Ingrese su Nombre" required/>
                  <div class="invalid-feedback">
                    Primer Nombre es requerido.
                  </div>
                </div>

                <div class="col-sm-6">
                  <label htmlFor="lastName" class="form-label">Apellido</label>
                  <input value={userData.apellido} onChange={inputChangeHandler} type="text" class="form-control" name="apellido" placeholder="Ingrese su apellido" required/>
                  <div class="invalid-feedback">
                    Apellido es requerido.
                  </div>
                </div>

                <div class="col-12">
                  <label htmlFor="username" class="form-label">Usuario</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text">@</span>
                    <input value={userData.usuario} onChange={inputChangeHandler} type="text" class="form-control" name="usuario" placeholder="Usuario" required/>
                    <div class="invalid-feedback">
                      Se requiere un usuario
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <label htmlFor="email" class="form-label">Email</label>
                  <input value={userData.email} onChange={inputChangeHandler} type="email" class="form-control" name="email" placeholder="vos@ejemplo.com"/>
                  <div class="invalid-feedback">
                    Por favor ingrese un e-mail válido para recibir todas nuestras noticias.
                  </div>
                </div>

                <div class="col-12">
                  <label htmlFor="telefono" class="form-label">Telefono</label>
                  <input value={userData.telefono} onChange={inputChangeHandler} type="text" class="form-control" name="telefono" placeholder="Telefono"/>
                  <div class="invalid-feedback">
                    Por favor ingrese un telefono válido para recibir todas nuestras noticias.
                  </div>
                </div>

                <div class="col-12">
                  <label htmlFor="address" class="form-label">Dirección</label>
                  <input  value={userData.direccion} onChange={inputChangeHandler} type="text" class="form-control" name="direccion" placeholder="Buenos Aires 317" required/>
                  <div class="invalid-feedback">
                    Por favor ingrese su dirección para realizar el envio.
                  </div>
                </div>
                <div class="col-md-5">
                  <label htmlFor="city" class="form-label">Ciudad</label>
                  <select class="form-select" id="city" required>
                    <option value="">Elegir...</option>
                    <option>Rosario</option>
                  </select>
                  <div class="invalid-feedback">
                    Por favor selecciones una ciudad válida.
                  </div>
                </div>

                <div class="col-md-4">
                  <label htmlFor="state" class="form-label">Zona</label>
                  <select class="form-select" id="state" required>
                    <option value="">Elegir...</option>
                    <option>Centro</option>
                    <option>Distrito Norte</option>
                    <option>Distrito Noroeste</option>
                    <option>Distrito Oeste</option>
                    <option>Distrito Sudoeste</option>
                    <option>Distrito Sur</option>
                  </select>
                  <div class="invalid-feedback">
                    Se requiere seleccionar una zona
                  </div>
                </div>

                <div class="col-md-3">
                  <label htmlFor="zip" class="form-label">Código Postal</label>
                  <input value={userData.zip}  onChange={inputChangeHandler} type="text" class="form-control" name="zip" placeholder="" required/>
                  <div class="invalid-feedback">
                    Se requiere código postal.
                  </div>
                </div>
                <div class="m-3">
                  <button type='submit'  onClick={handleSubmit} className='btn bg-warning m-4'> Enviar Pedido</button>
                </div>
              </div>
              </div>
  )
}

export default Registro