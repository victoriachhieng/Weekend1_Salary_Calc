let names = ['Ryan', 'Tang', 'Abdul'];

class Cohort{
    constructor(){
        this.names = names;
    }

    printCohort(){
        for(let name of this.names){
            console.log(`peeps', ${name}`);
        }
    }
}

module.exports = Cohort;