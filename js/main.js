import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

const myVM = (() => {
    //instantiate a new Vue instance
    let vue_vm = new Vue({
        data: {
            message: "Hello from Vue!",

            collection: [
                {name: "Kahani", role: "Awesome"},
                {name: "Sandra", role: "Awesome useless piece of shit"},
                {name: "Luisa", role: "Awesome"}
            ]
        },
        methods: {
            logClicked() {
                console.log("clicked on an element");
            }
        }
    }).$mount("#app");
})();