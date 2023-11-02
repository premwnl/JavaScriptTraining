/*            *
                                            Name of the challenge      : QUIZ                       *
                                            Challenge No               : 35                                                          *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              : 02/11/2023     Ticket No:               *
**/


//DOM declaration
//Constant declaration
//Main functions
let fetchData = (async () => {
    try {
        let questionResponse = await fetch('questions.js')
        let data = questionResponse.json()
    } catch (error) {
        console.log(error);
    }
})()