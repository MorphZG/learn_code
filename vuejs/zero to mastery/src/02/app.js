const app = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Doe",
            middleName: "",
            url: "https://google.com",
            raw_url: '<a href="https:google.com" target="_blank">Google</a>',
            age: 20,
        };
    },
    methods: {
        fullName() {
            return `${this.firstName} ${
                this.middleName
            } ${this.lastName.toUpperCase()}`;
        },
        increment() {
            this.age++;
        },
        updateLastName(message, event) {
            console.log(message);
            this.lastName = event.target.value;
        },
        updateMiddleName(message, event) {
            console.log(message);
            this.middleName = event.target.value;
        },
    },
});

app.mount("#app");

setTimeout(() => {
    app.firstName = "Bob";
}, 2000);

/* Vue.createApp({
    data() {
        return {
            firstName: "Petar",
            lastName: "Debelic",
        };
    },
}).mount("#app2"); */
