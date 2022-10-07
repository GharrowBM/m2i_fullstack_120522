<template>
    <div class="row g-2">
        <div class="col-4">
            <div class="border border-warning rounded p-2">
                <div class="row mb-2">
                    <div class="col-auto">
                        <h3 class="text-warning">Config</h3>
                        <hr class="text-light m-0">
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col-auto">
                        <label for="character" class="form-label">Character:</label>
                    </div>
                    <div class="col">
                        <select name="character" id="character" class="form-select" v-model="selectedCharacter"
                            v-if="c.characters">
                            <option v-for="c in c.characters" :value="c" :key="c.id">{{c.name}}</option>
                        </select>
                    </div>
                </div>
                <div class="row text-center g-2">
                    <div class="col">
                        <div class="border border-info rounded py-4 d-flex flex-column">
                            <span>MOD</span>
                            <input type="number" class="form-control w-50 mx-auto text-center mt-2"
                                v-model.number="modifier">
                        </div>
                    </div>
                    <div class="col">
                        <div class="border border-info rounded py-4 d-flex flex-column">
                            <span>VS</span>
                            <input type="text" class="form-control w-50 mx-auto text-center mt-2"
                                v-model.number="skillVersus">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-8">
            <div class="border border-warning rounded p-2">
                <div class="row mb-2">
                    <div class="col-auto">
                        <h3 class="text-warning">Roll Dices</h3>
                        <hr class="text-light m-0">
                    </div>
                    <p v-if="!selectedCharacter">Veuilliez sélectionner un personnage !</p>
                    <div v-else>
                        <div class="row row-cols-6 mt-2 text-center g-2 mx-auto">
                            <div class="col d-flex flex-column">
                                <span>STR</span>
                                <button class="btn btn-secondary" @click="makeRoll('STR')">{{STRModifier}}</button>
                            </div>
                            <div class="col d-flex flex-column">
                                <span>DEX</span>
                                <button class="btn btn-secondary" @click="makeRoll('DEX')">{{DEXModifier}}</button>
                            </div>
                            <div class="col d-flex flex-column">
                                <span>CON</span>
                                <button class="btn btn-secondary" @click="makeRoll('CON')">{{CONModifier}}</button>
                            </div>
                            <div class="col d-flex flex-column">
                                <span>INT</span>
                                <button class="btn btn-secondary" @click="makeRoll('INT')">{{INTModifier}}</button>
                            </div>
                            <div class="col d-flex flex-column">
                                <span>WIS</span>
                                <button class="btn btn-secondary" @click="makeRoll('WIS')">{{WISModifier}}</button>
                            </div>
                            <div class="col d-flex flex-column">
                                <span>CHA</span>
                                <button class="btn btn-secondary" @click="makeRoll('CHA')">{{CHAModifier}}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="border border-warning rounded p-2">
                <div class="row mb-2">
                    <div class="col-auto">
                        <h3 class="text-warning">Battle Log</h3>
                        <hr class="text-light m-0">
                    </div>
                    <p v-for="(b, i) in battleLogSliced" :key="i">{{b}}</p>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="text-end">
        <button class="btn btn-outline-light" @click="saveSession"><i class="bi bi-send"></i> Sauvegarder</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            skillVersus: 10,
            modifier: 0,
            c: {},
            selectedCharacter: {},
            battleLog: []
        }
    },
    mounted() {
        const id = this.$route.params.id
        axios.get(`https://vue-m2i-jdr-beyond-default-rtdb.europe-west1.firebasedatabase.app/campaigns/${id}.json`).then(res => {
            this.c = res.data
            if (this.c.characters.length) this.selectedCharacter = this.c.characters[0]
        })
    },
    methods: {
        makeRoll(type) {

            let baseValue = Math.floor(Math.random() * 20) + 1

            switch (type) {
                case 'STR':
                    baseValue += +this.STRModifier
                    this.battleLog.push(`${this.selectedCharacter.name} rolls a STR check (vs ${this.skillVersus}) and gets a ${baseValue}. ${(baseValue >= this.skillVersus ? "It's a success !" : "It's a fail...")}`)
                    break;
                case 'DEX':
                    baseValue += +this.DEXModifier
                    this.battleLog.push(`${this.selectedCharacter.name} rolls a DEX check (vs ${this.skillVersus}) and gets a ${baseValue}. ${(baseValue >= this.skillVersus ? "It's a success !" : "It's a fail...")}`)
                    break;
                case 'CON':
                    baseValue += +this.CONModifier
                    this.battleLog.push(`${this.selectedCharacter.name} rolls a CON check (vs ${this.skillVersus}) and gets a ${baseValue}. ${(baseValue >= this.skillVersus ? "It's a success !" : "It's a fail...")}`)
                    break;
                case 'INT':
                    baseValue += +this.INTModifier
                    this.battleLog.push(`${this.selectedCharacter.name} rolls a INT check (vs ${this.skillVersus}) and gets a ${baseValue}. ${(baseValue >= this.skillVersus ? "It's a success !" : "It's a fail...")}`)
                    break;
                case 'WIS':
                    baseValue += +this.WISModifier
                    this.battleLog.push(`${this.selectedCharacter.name} rolls a WIS check (vs ${this.skillVersus}) and gets a ${baseValue}. ${(baseValue >= this.skillVersus ? "It's a success !" : "It's a fail...")}`)
                    break;
                case 'CHA':
                    baseValue += +this.CHAModifier
                    this.battleLog.push(`${this.selectedCharacter.name} rolls a CHa check (vs ${this.skillVersus}) and gets a ${baseValue}. ${(baseValue >= this.skillVersus ? "It's a success !" : "It's a fail...")}`)
                    break;
            }
        },
        saveSession() {
            if (confirm("Are you sure you wanna end this session ?")) {
                if (!this.c.sessions) this.c.sessions = []
            this.c.sessions.push({
                date: new Date(),
                resume: this.battleLog
            })

            axios.patch(`https://vue-m2i-jdr-beyond-default-rtdb.europe-west1.firebasedatabase.app/campaigns/${this.c.id}.json`, this.c).then(() => {
                    this.$router.push('/campaigns')
                })
            }
        }
    },
    computed: {
        battleLogSliced() {
            return this.battleLog.length > 10 ? this.battleLog.slice(this.battleLog.length - 10, this.battleLog.length) : this.battleLog
        },
        STRModifier() {
            const stats = this.selectedCharacter.stats
            if (stats) {
                let finalModifier = stats.str / 2 - 5
                finalModifier += this.modifier
                if (finalModifier >= 0) return "+" + finalModifier
                else return finalModifier
            }
            return 0
        },
        DEXModifier() {
            const stats = this.selectedCharacter.stats
            if (stats) {
                let finalModifier = stats.dex / 2 - 5
                finalModifier += this.modifier
                if (finalModifier >= 0) return "+" + finalModifier
                else return finalModifier
            }
            return 0
        },
        CONModifier() {
            const stats = this.selectedCharacter.stats
            if (stats) {
                let finalModifier = stats.con / 2 - 5
                finalModifier += this.modifier
                if (finalModifier >= 0) return "+" + finalModifier
                else return finalModifier
            }
            return 0
        },
        INTModifier() {
            const stats = this.selectedCharacter.stats
            if (stats) {
                let finalModifier = stats.int / 2 - 5
                finalModifier += this.modifier
                if (finalModifier >= 0) return "+" + finalModifier
                else return finalModifier
            }
            return 0
        },
        WISModifier() {
            const stats = this.selectedCharacter.stats
            if (stats) {
                let finalModifier = stats.wis / 2 - 5
                finalModifier += this.modifier
                if (finalModifier >= 0) return "+" + finalModifier
                else return finalModifier
            }
            return 0
        },
        CHAModifier() {
            const stats = this.selectedCharacter.stats
            if (stats) {
                let finalModifier = stats.cha / 2 - 5
                finalModifier += this.modifier
                if (finalModifier >= 0) return "+" + finalModifier
                else return finalModifier
            }
            return 0
        },
    }
}
</script>