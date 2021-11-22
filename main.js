// Attraverso l’apposita API di Boolean
//  https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email
// e stamparli in pagina all’interno di una lista. (sempre untilizzando Vue)
// Bonus:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue ({
    el: "#mail_list",
    data: {
        // changeble number to set the list length
        listLength: 10,
        // empty objects list
        mailList: [

        ]
    },
    mounted: function() {
        const self = this;
        // in every iteration will get api data and push into self.mailList
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