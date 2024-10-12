<script>
    import { onMount } from "svelte";
    import { booleanPathName } from "../../../components/tools/pathName/pathName";
    import {getPayments} from "./misCompras"
    booleanPathName.set(false);
    let misCompras;
    onMount(async()=>{
        misCompras = await getPayments("benjidfer@gmail.com");
        console.log(misCompras);
    })
    
</script>