<script>
export default {
  methods: {
    validateForm () { 
        
        var name = document.Form.name.value;
        var email = document.Form.email.value;
        var mobile = document.Form.mobile.value;
        var country = document.Form.country.value;
        var gender = document.Form.gender.value;
        

        var nameErr = emailErr = mobileErr = countryErr = genderErr = true;
        

        if(name == "") {
            printError("nameErr", "Please enter your name");
            var elem = document.getElementById("name");
                elem.classList.add("input-2");
                elem.classList.remove("input-1");
        } else {
            var regex = /^[a-zA-Z\s]+$/;                
            if(regex.test(name) === false) {
                printError("nameErr", "Please enter a valid name");
                var elem = document.getElementById("name");
                elem.classList.add("input-2");
                elem.classList.remove("input-1");
            } else {
                printError("nameErr", "");
                nameErr = false;
                var elem = document.getElementById("name");
                elem.classList.add("input-1");
                elem.classList.remove("input-2");

                
            }
        }
        

        if(email == "") {
            printError("emailErr", "Please enter your email address");
            var elem = document.getElementById("email");
                elem.classList.add("input-2");
                elem.classList.remove("input-1");
        } else {
            
            var regex = /^\S+@\S+\.\S+$/;
            if(regex.test(email) === false) {
                printError("emailErr", "Please enter a valid email address");
                var elem = document.getElementById("email");
                elem.classList.add("input-2");
                elem.classList.remove("input-1");
            } else{
                printError("emailErr", "");
                emailErr = false;
                var elem = document.getElementById("email");
                elem.classList.add("input-1");
                elem.classList.remove("input-2");

            }
        }
        
    
        if(mobile == "") {
            printError("mobileErr", "Please enter your mobile number");
            var elem = document.getElementById("mobile");
                elem.classList.add("input-2");
                elem.classList.remove("input-1");
        } else {
            var regex = /^[1-9]\d{9}$/;
            if(regex.test(mobile) === false) {
                printError("mobileErr", "Please enter a valid 10 digit mobile number");
                var elem = document.getElementById("mobile");
                elem.classList.add("input-2");
                elem.classList.remove("input-1");
            } else{
                printError("mobileErr", "");
                mobileErr = false;
                var elem = document.getElementById("mobile");
                elem.classList.add("input-1");
                elem.classList.remove("input-2");
            }
        }
        

        if(country == "Select") {
            printError("countryErr", "Please select your country");
            var elem = document.getElementById("country");
                elem.classList.add("input-4");
                elem.classList.remove("input-3");
        } else {
            printError("countryErr", "");
            countryErr = false;
            var elem = document.getElementById("country");
                elem.classList.add("input-3");
                elem.classList.remove("input-4");
        }
        

        if(gender == "") {
            printError("genderErr", "Please select your gender");
            var elem = document.getElementById("gender");
                elem.classList.add("input-4");
                elem.classList.remove("input-3");
        } else {
            printError("genderErr", "");
            genderErr = false;
            var elem = document.getElementById("gender");
                elem.classList.add("input-3");
                elem.classList.remove("input-4");
        }
        
        
        if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
        return false;
        } 
    },
    printError (Id, Msg) { 
        document.getElementById(Id).innerHTML = Msg;
    },
  },

}

</script>
<template>
    <form name="Form" @click="validateForm()" >
        <h2>Inscrivez-vous</h2>
        <div class="box">
            <label>Votre nom</label>
            <input type="text" name="name" id="name">
            <div class="error" id="nameErr"></div>
        </div>
        <div class="box">
            <label>Votre prenom</label>
            <input type="text" name="prenom" maxlength="10" id="prenom">
            <div class="error" id="prenomErr"></div>
        </div>
        <div class="box">
            <label>Votre e-mail</label>
            <input type="text" name="email" id="email">
            <div class="error" id="emailErr"></div>
        </div>
        <div class="box">
            <label>Sexe</label>
            <div class="form-inline" id="gender">
                <label><input type="radio" name="gender" value="male"> Homme</label>
                <label><input type="radio" name="gender" value="female"> Femme</label> 
            </div>
            <div class="error" id="genderErr"></div>
        </div>
            
        <div class="box">
            <input type="submit" class="btn" value="S'inscrire">
        </div>
    </form>
</template>
<style scoped>
    .form{
    width: 100%;
}
h2 {
    text-align: center;
    color: #224bcf;
    font-size: 2.5rem !important;
    padding: 2rem 2rem;
    text-transform: none;
}
form {
    width: 50rem;
    padding: 15px 40px 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    margin: 4% auto;
    box-shadow: 0 10px 25px rgb(0 0 0 / 20%);;
}
label {
    display: block;
    margin-bottom: 5px;
    font-size: 1.5rem;
}
label i {
    color: #999;
}
input, select {
    border: 1px solid #ccc;
    padding: 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;
    border-radius: 2px;
    background-color: #a9bae64a;
}
.box {
    padding-bottom: 10px;
}
.btn{
    border-radius: .5rem;
    border: none;
}
.form-inline {
    border: 1px solid #ccc;
    padding: 8px 10px 4px;
    border-radius: 2px;
}
.form-inline label, .form-inline input {
    display: inline-block;
    width: auto;
    padding-right: 15px;
}
.error {
    color: red;
    font-size: 90%;
}
input[type=text]{
        outline: none;
}

.input-1{
    background-image: url(../images/check.png);
    background-repeat: no-repeat;
    background-position: right 10px center;
    border:1px solid #01cc40;
}
.input-2{
    background-image: url(../images/cancel.png);
    background-repeat: no-repeat;
    background-position: right 10px center;
    border:1px solid red;
}
.input-3{
    border:1px solid #01cc40!important;
}
select{
    outline: none!important;
}
.input-4{
    border:1px solid red;
}
</style>