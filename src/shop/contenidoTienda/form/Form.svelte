<script>
    import {Link} from "svelte-routing";
    let styleVolver = `padding-top: 25px;
    margin-left: 10px;
    font-size: 20px;
    color: white;
    font-family: 'Arial Narrow', Arial, sans-serif;`
</script>
<link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
<div class="body">    
    <div class="nav">
        <Link to="/shop" style={styleVolver} class="volver">Volver</Link>
        <img src="https://firebasestorage.googleapis.com/v0/b/cloud-image-361ff.appspot.com/o/images%2FbenfershopPng.png?alt=media&token=e58609b9-6974-49f1-bb0d-d872f93f7eaf" alt="" class="logo">
    </div>
    <div class="contenedor">
        <div class="contenedor-hijo">
            <fieldset>
               <legend><i class="fas fa-user" id="icono-user"></i></legend>
                <form>
                    <input class="input-1" type="text" placeholder="Usuario" required> <br>
                    <input class="input-2" type="password" placeholder="Contraseña" required> 
                <div class="checkyp">
                    <input type="checkbox" name="" id="check">
                    <p>Recordar</p>
                </div>
                    <button class="btn-f-1">Iniciar</button>      <br>                              
                    <button class="btn-f-2">Crear Cuenta</button>
                    <Link style="color:white;" to="*login" id="a">¿Olvidé mi contraseña</Link>
                </form>
            </fieldset>
        </div>
    </div>
</div>

<style>
.body {
   background-color: #084b6c;
   padding: 0;
   margin: 0;
   width: 100%;
   position:absolute;
   top:0;
   left:0;
}

.nav {
    display: flex;
    justify-content: space-between;
    background-color:  #063146;
    height: 70px;
}


.logo {
    margin-top: 5px;
    width: 85px;
    height: auto;
}

.contenedor {
    position: relative;
    height: 100vh;
}
  
.contenedor-hijo {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 100px;
    justify-content: center;
}

fieldset {
    height: 359px;
    width: 220px;
    text-align: center;
    border: 1px solid black;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: rgba(71, 206, 255, 0.524);
    box-shadow: 1px 1px 20px #063146;
    text-align: center;
}

legend {
    position: relative;
    top:-20px;
    left:70px;
    background-color: #084b6c;
    width: 80px;
    height: 55px;
    border-radius: 30px;
    justify-content: center;
    text-align: center;
}
#icono-user {
    color: white;
    font-size: 50px;
    background-color: transparent;
    padding-top: 0;
}

input {
    height: 30px;
    width: 200px;
    margin-top: 25px;
    border-radius: 3px;
    border: 1px solid black;
    background-color: rgb(169, 230, 254);
    color: rgb(0, 0, 0);
}

.input-1:hover {
    height: 35px;
    width: 200px;
    margin-top: 25px;
    border-radius: 3px;
    border: 1px solid black;
    background-color: rgb(169, 230, 254);
    color: rgb(0, 0, 0);
    transition: 0.5s;
}

.input-2 {
    height: 30px;
    width: 200px;
    margin-top: 10px;
    border-radius: 3px;
    border: 1px solid black;
    background-color: rgb(169, 230, 254);
    color: rgb(0, 0, 0);
}

.input-2:hover {
    transition: 0.5s;
    height: 35px;
    width: 200px;
    margin-top: 10px;
    border-radius: 3px;
    border: 1px solid black;
    background-color: rgb(169, 230, 254);
    color: rgb(0, 0, 0);
}

.checkyp {
    display: flex;
    width: 100%;
    margin-top: 3px;
}

p {
    padding-left: 8px;
    margin-top: 5px;
    color: white;
}

#check {
    width: 15px;
    margin-top: 0;
    margin-left: 10px;
}

.btn-f-1 {
    width: 200px;
    height: 32px;
    margin-top: 8px;
    background-color: yellow;
    border: 1px solid black;
    color: rgb(43, 43, 43);
    border-radius: 5px;
    padding-top: 0;
    
}

.btn-f-2 {
    width: 200px;
    height: 32px;
    margin-top: 3px;
    margin-bottom: 15px;
    background-color: rgb(255, 114, 6);
    border: 1px solid black;
    color: white;
    border-radius: 5px;
    padding-top: 0;
}


</style>