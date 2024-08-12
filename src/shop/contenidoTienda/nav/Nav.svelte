<script>
    import { Link } from "svelte-routing";
    let styleUlA = `display: block;
    height: 100%;
    width: 100%;
    line-height: 65px;
    font-size: 20px;
    color: white;
    padding-left: 40px;
    box-sizing: border-box;
    border-top: 1px solid rgb( 255, 255, 255,.1);
    border-bottom: 1px solid black;
    transition: 0.5s;`;
</script>

<div class="nav1" id="nav-1">
    <div style="width:100%; display:flex; justify-content:center;">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/cloud-image-361ff.appspot.com/o/images%2FbenfershopPng.png?alt=media&token=e58609b9-6974-49f1-bb0d-d872f93f7eaf"
            alt=""
            class="logo-2"
        />
    </div>
    <input type="checkbox" id="check" />
    <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="nav-2">
        <header>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/cloud-image-361ff.appspot.com/o/images%2FbenfershopPng.png?alt=media&token=e58609b9-6974-49f1-bb0d-d872f93f7eaf"
                alt="no soportado"
                class="logo"
            />
        </header>
        <ul>
            <li>
                <Link on:click={(e)=>{e.target.style="text-decoration:none"}} to="/shop" style={styleUlA}
                    ><i class="fas fa-home"></i>Inicio</Link
                >
            </li>
            <li>
                <Link to="/shop" style={styleUlA}
                    ><i class="fas fa-user"></i>Iniciar</Link
                >
            </li>
            <li>
                <Link to="/shop" style={styleUlA}
                    ><i class="fas fa-question-circle"></i>Servicios</Link
                >
            </li>
            <li>
                <Link to="/shop" style={styleUlA}
                    ><i class="fas fa-envelope"></i>Contactos</Link
                >
            </li>
            <li>
                <Link to="/shop" style={styleUlA}
                    ><i class="fas fa-sliders-h"></i>Categorias</Link
                >
            </li>
            <li>
                <Link to="/shop" style={styleUlA}
                    ><i class="fas fa-qrcode"></i>Pagos</Link
                >
            </li>
        </ul>
    </div>
</div>

<style>
    /*estilo*/ /*estilo*/ /*estilo*/ /*estilo*/ /*estilo*/

    /*NAV */ /*NAV */ /*NAV */ /*NAV */

    .nav1 {
        display: flex;
        position: fixed;
        width: 100%;
        justify-content: space-between;
        background-color: #063146;
        color: #063146;
        z-index: 99;
    }

    .logo {
        margin-top: 20px;
        width: 80px;
        height: auto;
    }

    .logo-2 {
        margin-top: 10px;
        width: 100px;
        height: auto;
    }

    /*NAV2 */ /*NAV2 */ /*NAV2 */ /*NAV2 */ /*NAV2 */
    .nav-2 {
        position: fixed;
        left: -250px;
        width: 250px;
        height: 100%;
        background-color: #042331;
        transition: 0.5s;
        z-index: 99;
    }

    .nav-2 header {
        font-size: 22px;
        color: white;
        text-align: center;
        line-height: 70px;
        background-color: #063146;
        user-select: none;
    }

    ul li:hover {
        padding-left: 50px;
        text-decoration: none;
    }

    .nav-2 ul a i {
        margin-right: 15px;
    }

    #check {
        display: none;
    }

    label #btn,
    label #cancel {
        position: absolute;
        cursor: pointer;
        background-color: #042331;
        border-radius: 3px;
    }

    label #btn {
        left: 0px;
        top: 10px;
        font-size: 35px;
        color: white;
        padding: 6px 12px;
        transition: 0.5s;
    }

    label #cancel {
        z-index: 1111;
        left: -195px;
        top: 17px;
        font-size: 30px;
        color: #0a5275;
        padding: 4px 9px;
        transition: 0.5s;
    }

    #check:checked ~ .nav-2 {
        left: 0;
    }

    #check:checked ~ label #btn {
        left: 250px;
        opacity: 0;
        pointer-events: none;
    }

    #check:checked ~ label #cancel {
        left: 195px;
    }
</style>
