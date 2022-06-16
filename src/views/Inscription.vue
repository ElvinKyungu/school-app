<script>
export default {
  methods: {
    printError (Id, Msg) { 
        document.getElementById(Id).innerHTML = Msg;
    },
    validateForm () { 
        
        var name = document.querySelector('.name').value;
        var email = document.querySelector('.email').value;
        var password = document.querySelector('.password').value;
        var password2 = document.querySelector('.password2').value;
        console.log(name);
    //     alert(name)
        // var nameErr = emailErr = passwordErr = password2Err = true;
         if(name == "") {
            this.printError("nameErr", "Veuillez saisir le nom");
            var elem = document.getElementById("name");
                elem.classList.add("input-2");
                elem.classList.remove("input-1");
        } else {
            var regex = /^[a-zA-Z\s]+$/;                
            if(regex.test(name) === false || name.length <= 3) {
                this.printError("nameErr", "Veuillez saisir le nom valide");
                var elem = document.getElementById("name");
                elem.classList.add("input-2");
                elem.classList.remove("input-1");
            } else {
                this.printError("nameErr", "");
                var elem = document.getElementById("name");
                elem.classList.add("input-1");
                elem.classList.remove("input-2");
            }
        }
        if(email == "") {
            this.printError("emailErr", "Please enter your email address");
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
        if(password2 == "") {
            this.printError("password2Err", "Veuillez saisir votre mot de passe");
            var elem = document.getElementById("password2");
                elem.classList.add("input-2");
                elem.classList.remove("input-1");
        }else if(password != password2) {
            this.printError("password2Err", "Les deux mot de passe ne correspondent pas");
            var elem = document.getElementById("password2");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }
         else{
            this.printError("password2Err", "");    
            var elem = document.getElementById("password2");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    },
  },
}

</script>
<template>
    <form name="Form">
        <h2>Inscrivez-vous</h2>
        <div class="box">
            <label>Username :</label>
            <input type="text" name="name" id="name" class="name">
            <div class="error" id="nameErr"></div>
        </div>
        
        <div class="box">
            <label>e-mail :</label>
            <input type="text" name="email" id="email" class="email">
            <div class="error" id="emailErr"></div>
        </div>
        <div class="box">
            <label>Mot de passe :</label>
            <input type="password" name="password"  id="password" class="password">
            <div class="error" id="passwordErr"></div>
        </div>
         <div class="box">
            <label>Répeter votre mot de passe :</label>
            <input type="password" class="password2"  id="password2">
            <div class="error" id="password2Err"></div>
        </div>
        <div class="box">
        <router-link style="width: 100%; text-align: center;" to="" @click="validateForm" class="btn">S'inscrire</router-link>
        </div>
        <label>Avez-vous déjà un de compte ? <router-link to="../Connexion">Connectez-vous maintenant</router-link> </label>
    </form>
</template>
<style scoped>

</style>