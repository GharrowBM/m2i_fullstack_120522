<template>
    <form @submit.prevent="onSubmit">
        <h6 class="my-2 text-center text-warning">Basic Informations</h6>
        <br>
        <div class="row">
            <div class="col">
                <div class="row mb-2">
                    <div class="col-4">
                        <label for="name" class="form-label">Name: </label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" v-model="c.name">
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-4">
                        <label for="race" class="form-label">Race: </label>
                    </div>
                    <div class="col">
                        <select name="race" id="race" class="form-select" v-model="c.race">
                            <option value="none">Please select a race</option>
                            <option v-for="race in availableRaces" :value="race"
                                :key="race">{{race}}</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-4">
                        <label for="gender" class="form-label">Gender: </label>
                    </div>
                    <div class="col">
                        <select name="gender" id="gender" class="form-select" v-model="c.gender">
                            <option value="none">Please select a gender</option>
                            <option v-for="gender in availableGenders" :value="gender"
                                :key="gender">{{gender}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row mb-2">
                    <div class="col-4">
                        <label for="player" class="form-label">Player: </label>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" v-model="c.player">
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-4">
                        <label for="class" class="form-label">Class: </label>
                    </div>
                    <div class="col">
                        <select name="charClass" id="charClass" class="form-select" v-model="c.charClass">
                            <option value="none">Please select a class</option>
                            <option v-for="charClass in availableClasses" :value="charClass"
                                :key="charClass">{{charClass}}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <hr class="w-50 mx-auto text-warning">
        <h6 class="my-2 text-center text-warning">Statistics</h6>
        <br>
        <div class="row text-center g-2" v-if="c.stats">
            <div class="col">
                <div class="border border-info rounded py-4 d-flex flex-column">
                    <span>STR</span>
                    <input type="text" class="form-control w-50 mx-auto text-center mt-2 col-stat"
                        v-model.number="c.stats.str">
                </div>
            </div>
            <div class="col">
                <div class="border border-info rounded py-4 d-flex flex-column">
                    <span>DEX</span>
                    <input type="text" class="form-control w-50 mx-auto text-center mt-2" v-model.number="c.stats.dex">

                </div>
            </div>
            <div class="col">
                <div class="border border-info rounded py-4 d-flex flex-column">
                    <span>CON</span>
                    <input type="text" class="form-control w-50 mx-auto text-center mt-2" v-model.number="c.stats.con">

                </div>
            </div>
            <div class="col">
                <div class="border border-info rounded py-4 d-flex flex-column">
                    <span>INT</span>
                    <input type="text" class="form-control w-50 mx-auto text-center mt-2" v-model.number="c.stats.int">

                </div>
            </div>
            <div class="col">
                <div class="border border-info rounded py-4 d-flex flex-column">
                    <span>WIS</span>
                    <input type="text" class="form-control w-50 mx-auto text-center mt-2" v-model.number="c.stats.wis">

                </div>
            </div>
            <div class="col">
                <div class="border border-info rounded py-4 d-flex flex-column">
                    <span>CHA</span>
                    <input type="text" class="form-control w-50 mx-auto text-center mt-2" v-model.number="c.stats.cha">
                </div>
            </div>
        </div>
        <hr>
        <div class="text-end">
            <button class="btn btn-outline-light"><i class="bi bi-send"></i> Send</button>
        </div>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            c: {},
            availableRaces: [
                "Human",
                "Dwarf",
                "Elf",
                "Halfling",
                "Half-Orc",
                "Gnome",
                "Half-Elf"
            ],
            availableClasses: [
                "Fighter",
                "Monk",
                "Ranger",
                "Warlock",
                "Wizard",
                "Druid",
                "Sorcerer",
                "Paladin",
                "Bard",
                "Barbarian"
            ],
            availableGenders: [
                "Male",
                "Female"
            ]
        }
    },
    methods: {
        onSubmit() {
            axios.patch(`https://vue-m2i-jdr-beyond-default-rtdb.europe-west1.firebasedatabase.app/characters/${this.c.id}.json`, this.c).then(() => {
                this.$router.push('/characters')
            })
        }
    },
    mounted() {
        const id = this.$route.params.id
        axios.get(`https://vue-m2i-jdr-beyond-default-rtdb.europe-west1.firebasedatabase.app/characters/${id}.json`).then(res => {
            this.c = {id, ...res.data}
        })
    }
}
</script>
