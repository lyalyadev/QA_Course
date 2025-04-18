
// css
// [class="pay-container"];
// [class= "cup"]

// x-path


//div[@class="cup"]



function addDashesBetweenPairedNumbers(num) {
    const str = String(num);
    console.log(str)
};
addDashesBetweenPairedNumbers(24568);

const student = {
    name: 'Lyalya',
    age: 38,
    isMarried: true,
    hasChildren: true,
    lastName: 'Samoilenko',
    'has-work': true,
    chidren: ['Illia', 'Lisa'],
    education: [{name: 'school', years: '1997-2007'}, {name: 'uni', years: '2007-2009'}],
    greetings: (specialWord)=> {
        console.log(this.name)
        console.log( specialWord + 'Hello everyone!')
    },

    greetingsThis: function (specialWord){
        console.log( specialWord + 'Hello everyone!')
    },

    getAliveStatus: function () {
        const status = `SELECT * From student`
    },

    getStatus: function () {
        const status = `SELECT * From student`
    }

}
student.greetings('hide how folks nkhf ')
console.log(student.education[1].years);
console.log(student.greetings());










