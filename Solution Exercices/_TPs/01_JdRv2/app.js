const app = Vue.createApp({
    data() {
        return {
            playerName: "PLAYER",
            monsterName: "MONSTER",
            playerHealth: 100,
            monsterHealth: 100,
            playerMana: 100,
            monsterMana: 100,
            playerManaRecovery: 5,
            monsterManaRecovery: 5,
            playerAC: 6,
            monsterAC: 0,
            playerHealCost: 20,
            playerSpecialCost: 50,
            playerWeaponDice: 12,
            playerSpecialMultiplier: 3,
            playerGuardDice: 10,
            playerHealDice: 10,
            monsterHealCost: 20,
            monsterSpecialCost: 50,
            monsterWeaponDice: 10,
            monsterSpecialMultiplier: 3,
            monsterGuardDice: 6,
            monsterHealDice: 8,
            playerAction: '',
            playerActionAmount: 0,
            monsterAction: '',
            monsterActionAmount: 0,
            battleLog: []
        }
    },
    computed: {
        lastBattleLogs() {
            return this.battleLog.length > 10 ? this.battleLog.slice(this.battleLog.length - 10, this.battleLog.length) : this.battleLog
        }
    },
    methods: {
        playerAttack() {
            this.monsterAction = this.randomizeMonsterMove()

            if (this.monsterAction == 'GUA') this.playerActionAmount = Math.max(1, this.rollDice(this.playerWeaponDice) - (this.rollDice(this.monsterGuardDice) + this.monsterAC))
            else if (this.monsterAction == 'HEA') this.playerActionAmount = (this.rollDice(this.playerWeaponDice) - this.monsterAC) + this.rollDice(this.monsterHealDice)
            else this.playerActionAmount = Math.max(1, this.rollDice(this.playerWeaponDice) - (this.monsterAC))

            this.playerAction = 'ATK'

            this.addToBattleLog()
        },
        playerDefend() {
            this.monsterAction = this.randomizeMonsterMove()

            this.playerActionAmount = 0

            this.playerAction = 'GUA'

            this.addToBattleLog()
        },
        playerHeal() {
            this.monsterAction = this.randomizeMonsterMove()

            if (this.monsterAction == 'ATK') this.playerActionAmount = this.rollDice(this.playerHealDice) - this.rollDice(this.monsterWeaponDice)
            else if (this.monsterAction == 'SPC') this.playerActionAmount = this.rollDice(this.playerHealDice) - this.rollDice(this.monsterWeaponDice) * this.monsterSpecialMultiplier
            else this.playerActionAmount = this.rollDice(this.playerHealDice)

            this.playerMana -= this.playerHealCost

            this.playerAction = 'HEA'

            this.addToBattleLog()
        },
        playerSpecial() {
            this.monsterAction = this.randomizeMonsterMove()

            if (this.monsterAction == 'GUA') this.playerActionAmount = Math.max(1, this.rollDice(this.playerWeaponDice) * this.playerSpecialMultiplier - (this.rollDice(this.monsterGuardDice) + this.monsterAC))
            else if (this.monsterAction == 'HEA') this.playerActionAmount = (this.rollDice(this.playerWeaponDice) * this.playerSpecialMultiplier - this.monsterAC) + this.rollDice(this.monsterHealDice)
            else this.playerActionAmount = Math.max(1, this.rollDice(this.playerWeaponDice) - (this.monsterAC))

            this.playerMana -= this.playerSpecialCost

            this.playerAction = 'SPC'

            this.addToBattleLog()
        },
        randomizeMonsterMove() {
            let randomValue = Math.ceil(Math.random() * 100)

            if (randomValue >= 1 && randomValue <= 20) return 'GUA'
            else if (randomValue >= 21 && randomValue <= 30 && this.monsterMana >= this.monsterHealCost) return 'HEA'
            else if (randomValue >= 31 && randomValue <= 50 && this.monsterMana >= this.monsterSpecialCost) return 'SPC'
            else return 'ATK'
        },
        monsterAttack() {
            if (this.playerAction == 'GUA') this.monsterActionAmount = Math.max(1, this.rollDice(this.monsterWeaponDice) - (this.rollDice(this.playerGuardDice) + this.playerAC))
            else if (this.playerAction == 'HEA') this.monsterActionAmount = (this.rollDice(this.monsterWeaponDice) - this.playerAC) + this.rollDice(this.playerHealDice)
            else this.monsterActionAmount = Math.max(1, this.rollDice(this.monsterWeaponDice) - (this.playerAC))
        },
        monsterHeal() {
            this.monsterActionAmount = this.rollDice(this.monsterHealDice)

            this.monsterMana -= this.monsterHealCost
        },
        monsterSpecial() {
            if (this.playerAction == 'GUA') this.monsterActionAmount = Math.max(1, this.rollDice(this.monsterWeaponDice) * this.monsterSpecialMultiplier - (this.rollDice(this.playerGuardDice) + this.playerAC))
            else if (this.playerAction == 'HEA') this.monsterActionAmount = (this.rollDice(this.monsterWeaponDice) * this.monsterSpecialMultiplier - this.playerAC) + this.rollDice(this.playerHealDice)
            else this.monsterActionAmount = Math.max(1, this.rollDice(this.monsterWeaponDice) - (this.playerAC))

            this.monsterMana -= this.monsterSpecialCost
        },
        rollDice(value) {
            return Math.floor(Math.random() * value) + 1
        },
        refreshState() {
            this.playerMana += this.playerManaRecovery
            this.monsterMana += this.monsterManaRecovery

            if (this.monsterHealth < 0) this.monsterHealth = 0
            if (this.monsterMana < 0) this.monsterMana = 0
            if (this.playerHealth < 0) this.playerHealth = 0
            if (this.playerMana < 0) this.playerMana = 0

            if (this.monsterHealth > 100) this.monsterHealth = 100
            if (this.monsterMana > 100) this.monsterMana = 100
            if (this.playerHealth > 100) this.playerHealth = 100
            if (this.playerMana > 100) this.playerMana = 100

            this.monsterGuard = 0
            this.playerGuard = 0

            this.monsterActionAmount = 0
            this.playerActionAmount = 0
        },
        testVictory() {
            if (this.playerHealth > 0 && this.monsterHealth == 0) alert("Vous avez gagné !")
            else if (this.monsterHealth > 0 && this.playerHealth == 0) alert("Vous avez perdu !")
            else if (this.playerHealth == 0 && this.monsterHealth == 0) alert("Vous vous êtes entretués !")
        },
        addToBattleLog() {
            switch (this.monsterAction) {
                case 'ATK':
                    this.monsterAttack()
                    break
                case 'SPC':
                    this.monsterSpecial()
                    break
                case 'HEA':
                    this.monsterHeal()
                    break
            }

            if (this.playerAction === 'ATK' && this.monsterAction == 'ATK') {
                this.playerHealth -= this.monsterActionAmount
                this.monsterHealth -= this.playerActionAmount

                this.battleLog.push(`${this.playerName} attacks ${this.monsterName} : ${this.playerName} deals ${this.playerActionAmount} damage !`)
                this.battleLog.push(`${this.monsterName} attacks ${this.playerName} : ${this.monsterName} deals ${this.monsterActionAmount} damage !`)
            } else if (this.playerAction === 'ATK' && this.monsterAction == 'SPC') {
                this.playerHealth -= this.monsterActionAmount
                this.monsterHealth -= this.playerActionAmount

                this.battleLog.push(`${this.playerName} attacks ${this.monsterName} : ${this.playerName} deals ${this.playerActionAmount} damage !`)
                this.battleLog.push(`${this.monsterName} makes a special move against ${this.playerName} : ${this.monsterName} deals ${this.monsterActionAmount} damage !`)
            } else if (this.playerAction === 'ATK' && this.monsterAction == 'GUA') {
                this.monsterHealth -= this.playerActionAmount

                this.battleLog.push(`${this.playerName} attacks while ${this.monsterName} is defending : ${this.playerName} deals ${this.playerActionAmount} damage !`)
            } else if (this.playerAction === 'ATK' && this.monsterAction == 'HEA') {
                this.monsterHealth -= this.playerActionAmount

                if (this.playerActionAmount < 0) this.battleLog.push(`${this.playerName} attacks while ${this.monsterName} is healing : ${this.monsterName} recovers ${this.monsterActionAmount} health points !`)
                else if (this.playerActionAmount > 0) this.battleLog.push(`${this.playerName} attacks while ${this.monsterName} is healing : ${this.playerName} deals ${this.playerActionAmount} damage !`)
                else this.battleLog.push(`${this.playerName} attacks while ${this.monsterName} is healing : Nothing happened !`)
            } else if (this.playerAction === 'SPC' && this.monsterAction == 'ATK') {
                this.playerHealth -= this.monsterActionAmount
                this.monsterHealth -= this.playerActionAmount

                this.battleLog.push(`${this.playerName} makes a special move against ${this.monsterName} : ${this.playerName} deals ${this.playerActionAmount} damage !`)
                this.battleLog.push(`${this.monsterName} attacks ${this.playerName} : ${this.monsterName} deals ${this.monsterActionAmount} damage !`)
            } else if (this.playerAction === 'SPC' && this.monsterAction == 'SPC') {
                this.playerHealth -= this.monsterActionAmount
                this.monsterHealth -= this.playerActionAmount

                this.battleLog.push(`${this.playerName} makes a special move against ${this.monsterName} : ${this.playerName} deals ${this.playerActionAmount} damage !`)
                this.battleLog.push(`${this.monsterName} makes a special move against ${this.playerName} : ${this.monsterName} deals ${this.monsterActionAmount} damage !`)
            } else if (this.playerAction === 'SPC' && this.monsterAction == 'GUA') {
                this.monsterHealth -= this.playerActionAmount

                this.battleLog.push(`${this.playerName} makes a special move while ${this.monsterName} is defending : ${this.playerName} deals ${this.playerActionAmount} damage !`)
            } else if (this.playerAction === 'SPC' && this.monsterAction == 'HEA') {
                this.monsterHealth -= this.playerActionAmount

                if (this.playerActionAmount < 0) this.battleLog.push(`${this.playerName} makes a special move while ${this.monsterName} is healing : ${this.monsterName} recovers ${this.monsterActionAmount} health points !`)
                else if (this.playerActionAmount > 0) this.battleLog.push(`${this.playerName} makes a special move while ${this.monsterName} is healing : ${this.playerName} deals ${this.playerActionAmount} damage !`)
                else this.battleLog.push(`${this.playerName} makes a special move while ${this.monsterName} is healing : Nothing happened !`)
            } else if (this.playerAction === 'HEA' && this.monsterAction == 'ATK') {
                this.playerHealth += this.playerActionAmount

                if (this.playerActionAmount < 0) this.battleLog.push(`${this.playerName} heals while ${this.monsterName} is attacking : ${this.playerName} takes ${Math.abs(this.playerActionAmount)} damage !`)
                else if (this.playerActionAmount > 0) this.battleLog.push(`${this.playerName} heals while ${this.monsterName} is attacking : ${this.playerName} recovers ${this.playerActionAmount} health points !`)
                else this.battleLog.push(`${this.playerName} heals while ${this.monsterName} is attacking : Nothing happened !`)
            } else if (this.playerAction === 'HEA' && this.monsterAction == 'SPC') {
                this.playerHealth += this.playerActionAmount

                if (this.playerActionAmount < 0) this.battleLog.push(`${this.playerName} heals while ${this.monsterName} is doing a special moves : ${this.playerName} takes ${Math.abs(this.playerActionAmount)} damage !`)
                else if (this.playerActionAmount > 0) this.battleLog.push(`${this.playerName} heals while ${this.monsterName} is doing a special moves : ${this.playerName} recovers ${this.playerActionAmount} health points !`)
                else this.battleLog.push(`${this.playerName} heals while ${this.monsterName} is doing a special moves : Nothing happened !`)
            } else if (this.playerAction === 'HEA' && this.monsterAction == 'GUA') {
                this.playerHealth += this.playerActionAmount

                this.battleLog.push(`${this.playerName} heals while ${this.monsterName} is guarding : ${this.playerName} recovers ${this.playerActionAmount} health points !`)
            } else if (this.playerAction === 'HEA' && this.monsterAction == 'HEA') {
                this.playerHealth += this.playerActionAmount
                this.monsterHealth += this.monsterActionAmount

                this.battleLog.push(`${this.playerName} heals : ${this.playerName} recovers ${this.playerActionAmount} health points !`)
                this.battleLog.push(`${this.monsterName} heals : ${this.monsterName} recovers ${this.monsterActionAmount} health points !`)
            } else if (this.playerAction === 'GUA' && this.monsterAction == 'ATK') {
                this.playerHealth -= this.monsterActionAmount

                if (this.monsterActionAmount > 0) this.battleLog.push(`${this.playerName} guard against ${this.monsterName} attacks : ${this.playerName} takes ${this.monsterActionAmount} damage !`)
                else this.battleLog.push(`${this.playerName} guard against ${this.monsterName} attacks : ${this.playerName} takes no damage !`)
            } else if (this.playerAction === 'GUA' && this.monsterAction == 'SPC') {
                this.playerHealth -= this.monsterActionAmount

                if (this.monsterActionAmount > 0) this.battleLog.push(`${this.playerName} guard against ${this.monsterName}'s special move : ${this.playerName} takes ${this.monsterActionAmount} damage !`)
                else this.battleLog.push(`${this.playerName} guard against ${this.monsterName}'s special move : ${this.playerName} takes no damage !`)
            } else if (this.playerAction === 'GUA' && this.monsterAction == 'GUA') {

                this.battleLog.push(`${this.playerName} and ${this.monsterName} are both guarding : Nothing happened !`)
            } else if (this.playerAction === 'GUA' && this.monsterAction == 'HEA') {
                this.monsterHealth += this.monsterActionAmount

                this.battleLog.push(`${this.playerName} is guarding while ${this.monsterName} is healing : ${this.monsterName} recovers ${this.monsterActionAmount} health points !`)
            }


            this.refreshState()

            setTimeout(this.testVictory(), 1000)
        }
    }
});

app.mount('#app');