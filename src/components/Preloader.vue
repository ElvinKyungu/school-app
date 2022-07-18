<script >
    export default {
    created () {
        setTimeout(()=>{
            document.querySelector("#preloader").classList.add("hidden");
        }, 3000);
        
    },
    data() {

    }
}
</script>

<template>
    <div id="preloader">
        <div class="container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>
<style>
.hidden{
    visibility: hidden;
    display: none;
}
#preloader{
    background-color: #000;
    padding: 0;
    top: 0;
    margin: 0;
    height: 100vh;
    position: fixed;
    width: 100%;
    z-index: 9999;
    display: grid;
    place-items: center center;
}
.container{
    height: 250px;
    width: 250px;
    position: relative;
    animation: spin 1.5s infinite;
}
@keyframes spin{
    100%{
        transform: rotate(360deg);
    }
}
.container>div:nth-child(1){
    height: 45px;
    width: 45px;
    background-image: linear-gradient(
        45deg,
        #F17300,
        #FABC2A
    );
    position: absolute;
    top: 110px;
    left: 120px;
    box-shadow: 0 0 3px #f7d000;
    border-radius: 50%;
    animation: move1 1.5s infinite;
}
@keyframes move1{
    50%{
        transform: translate(-30px,-30px) scale(0.3);
    }
}
.container>div:nth-child(2){
    height: 45px;
    width: 45px;
    background-image: linear-gradient(
        45deg,
        #7451eb,
        #5c2bfd
    );
    position: absolute;
    top: 120px;
    right: 100px;
    box-shadow:  0 0 2px #00d7f7;
    border-radius: 50%;
    animation: move2 1.5s infinite;
}
@keyframes move2{
    50%{
        transform: translate(15px,-20px) scale(0.55);
    }
}
.container>div:nth-child(3){
    height: 45px;
    width: 45px;
    background-image: linear-gradient(
        45deg,
        #ff3434,
        #ff1919
    );
    position: absolute;
    bottom: 100px;
    right: 120px;
    box-shadow: 0 0 3px #f60180;
    border-radius: 50%;
    animation: move3 1.5s infinite;
}
@keyframes move3{
    50%{
        transform: translate(30px,30px) scale(0.3);
    }
}
.container>div:nth-child(4){
    height: 45px;
    width: 45px;
    background-image: linear-gradient(
        45deg,
        #FFFBFE,
        #FFFBFE
    );
    position: absolute;
    bottom: 105px;
    left: 100px;
    border-radius: 50%;
    animation: move4 1.5s infinite;
}
@keyframes move4{
    50%{
        transform: translate(-15px,20px) scale(0.55);
    }
}

</style>