const applicationModel = require('../models/application.models')
const emailService = require('../services/email.service')
module.exports = {
    create: async(params) =>{
        console.log(params);
        const result = await applicationModel.create({

            position:params.position,
            name:params.name,
            surname:params.surname,
            birthdate:params.date,
            birthplace:params.birthplace,
            married:params.married,
            children:params.children,
            personalId:params.personalId,
            address:params.address,
            telephone:params.telephone,
            email:params.email,
            albanianR:params.albanianR,
            serbianR:params.serbeR,
            englishR:params.englishR,
            othersR:params.italianR,
            albanianW:params.albanianW,
            serbianW:params.serbeW,
            englishW:params.englishW,
            othersW:params.italianW,
            word:params.word,
            excel:params.excel,
            powerpoint:params.powerpoint,
            windows:params.windows,
            InternetExp:params.internetexp,
            Outlook:params.outlook,
            VisualBasic:params.visualbasic,
            school:params.school,
            university:params.university,
            trainings:params.training,
            tjera:params.tjera,
            title1:params.puna1,
            insitution1:params.inst1,
            tasks1:params.pershk1,
            startDate1:params.datap1,
            endDate1:params.dataf1,
            title2:params.puna2,
            insitution2:params.inst2,
            tasks2:params.pershk2,
            startDate2:params.datap2,
            endDate2:params.dataf2



        }
        )
        const sentEmail = await emailService.sendForgotPasswordEmail(result._id);
        return result;
        

    },
    findAllApp: async() =>{
        const result = await applicationModel.find().sort('-createdAt');
        return result;
    },
    findSingleApplication: async(params) =>{
        
        const result = await applicationModel.findById(params);
        console.log(result);

        return result;
    }
}