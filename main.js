// Attraverso l’apposita API di Boolean
//  https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email
// e stamparli in pagina all’interno di una lista. (sempre untilizzando Vue)
// Bonus:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue ({
    el: "#mail_list",
    data: {
        // changeable number to set the list length
        listLength: 10,
        newMailLength: null,
        // empty objects lists
        mailList: [],
        newMailList: []
    },
    methods: {
        // at the enter key pression
        setLength() {
            const self = this;
            // same mounted function
            for (let j = 0; j < self.newMailLength; j++) {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (generateMail) {
                        newMail = generateMail.data.response;
                        self.newMailList.push(newMail);
                    })
            }
            // new list reset for a new input
            self.newMailList.splice(0 , self.newMailLength + 1);
            // input field reset
            self.newMailLength = "";
        }
    },
    mounted: function() {
        const self = this;
        // in every iteration will get api data and push into 'mailList'
        for (let i = 0; i < self.listLength; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (generateMail) {
                    newMail = generateMail.data.response;
                    self.mailList.push(newMail);
                })
        }
    }
})