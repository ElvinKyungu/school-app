<script>
export default {
  methods: {
        printError (Id, Msg) { 
        document.getElementById(Id).innerHTML = Msg;
    },
    validateForm () { 
        var email = document.querySelector('.email').value;
        var password = document.querySelector('.password').value;
        if(email == "") {
            this.printError("emailErr", "Entrer votre adresse mail s'il vous plaît");
            var elem = document.getElementById("email");
                elem.classList.add("input-2");
                elem.classList.remove("input-1");
        } else {
            
            var regex = /^\S+@\S+\.\S+$/;
            if(regex.test(email) === false) {
                this.printError("emailErr", "Entrer une adresse mail valide");
                var elem = document.getElementById("email");
                elem.classList.add("input-2");
                elem.classList.remove("input-1");
            } else{
                document.getElementById('emailErr').innerText = "Bravo !!";
                this.printError("emailErr", "");
                var elem = document.getElementById("email");
                elem.classList.add("input-1");
                elem.classList.remove("input-2");

            }
        }
        if(password == "") {
            this.printError("passwordErr", "Veuillez saisir votre mot de passe");
            var elem = document.getElementById("password");
                elem.classList.add("input-2");
                elem.classList.remove("input-1");
        } else {
            
            var regex =/^[a-zA-Z0-9\s]+$/;
            if(regex.test(password) === false || password < 4) {
                this.printError("passwordErr", "Entrer un mot de passe avec minimum 4 caractères");
                var elem = document.getElementById("password");
                elem.classList.add("input-2");
                elem.classList.remove("input-1");
            } else{
                this.printError("passwordErr", "");
                var elem = document.getElementById("password");
                elem.classList.add("input-1");
                elem.classList.remove("input-2");
            }
        }
    },
  },
}

</script>
<template>
    <form name="Form" @click="validateForm()" >
        <h2>Connectez-vous</h2>
        <div class="box">
            <label>Email:</label>
            <input type="text" id="email" class="email">
            <div class="error" id="emailErr"></div>
        </div>
        <div class="box">
            <label>Mot de passe :</label>
            <input type="text" id="password" class="password">
            <div class="error" id="passwordErr"></div>
        </div>
        <div class="box">
        <router-link to="" style="width: 100%; text-align: center" class="btn">Se connecter</router-link>
        </div>
        <label>Vous n'avez pas de compte ? <router-link to="../Inscription">Inscrivez-vous maintenant</router-link> </label>
    </form>
</template>
<style scoped>

</style>