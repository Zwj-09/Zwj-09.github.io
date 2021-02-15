new Vue({
    el: '#app',
    data() {
        return {
            // 设置健康条
            health: 100,
            isBrust: false
        }
    },
    methods: {
        punch() {
            this.health -= 10;
            if (this.health <= 0) {
                this.isBrust = true;
            }
        },
        restart() {
            this.health = 100;
            this.isBrust = false;
        }
    }
})