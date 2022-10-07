<template>
    <form @submit.prevent="onSubmit">
        <div class="row">
            <div class="col">
                <div class="row mb-2">
                    <div class="col-4">
                        <label for="lastname" class="form-label">Lastname :</label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" id="lastname" name="lastname" placeholder="DUPONT">
                    </div>
                    <div class="col-12">
                        <span class="text-danger">Lastname is incorrect !</span>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-4">
                        <label for="email" class="form-label">Email :</label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" id="email" name="email"
                            placeholder="j.dupont@example.com">
                    </div>
                    <div class="col-12">
                        <span class="text-danger">Email is incorrect !</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row mb-2">
                    <div class="col-4">
                        <label for="firstname" class="form-label">Firstname :</label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" id="firstname" name="firstname" placeholder="John">
                    </div>
                    <div class="col-12">
                        <span class="text-danger">Firstname is incorrect !</span>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-4">
                        <label for="phone" class="form-label">Phone number :</label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" id="phone" name="phone" placeholder="+32 123 456 789">
                    </div>
                    <div class="col-12">
                        <span class="text-danger">Phone number is incorrect !</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col-4">
                <label for="service" class="form-label">Service :</label>
            </div>
            <div class="col">
                <select name="service" id="service" class="form-select">
                    <option value="account">Problème de compte</option>
                    <option value="subscription">Problème d'abonnement</option>
                    <option value="password">Problème de mot de passe</option>
                    <option value="delivery">Problème de livraison</option>
                </select>
            </div>
            <div class="col-12">
                <span class="text-danger">Service is incorrect !</span>
            </div>
        </div>
        <div class="row mb-2">
                    <div class="col-4">
                        <label for="subject" class="form-label">Subject :</label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" id="subject" name="subject" placeholder="I can't log in...">
                    </div>
                    <div class="col-12">
                        <span class="text-danger">Subject is incorrect !</span>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-4">
                        <label for="message" class="form-label">Message :</label>
                    </div>
                    <div class="col">
                        <textarea name="message" id="message" cols="30" rows="10" class="form-control custom-textarea"></textarea>
                    </div>
                    <div class="col-12">
                        <span class="text-danger">Message is incorrect !</span>
                    </div>
                </div>
    </form>
</template>

<script>
export default {
    methods: {
        onSubmit(event) {
            console.log(event)
        }
    }
}
</script>

<style scoped>
    .custom-textarea {
        height: 300px !important;
        resize: none;
    }
</style>