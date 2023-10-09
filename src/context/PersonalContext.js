export const PersonalData = {
    Name:'',
    CardNum:'',
    Date:'',
    CvcCcv:'',
}

export function PersonalDataInput(e){
    const name=e.target.name
    PersonalData[name]=e.target.value
    console.log(PersonalData)
}