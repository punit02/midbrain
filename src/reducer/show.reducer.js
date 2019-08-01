const initialState={
    showDonor:true,
    showHospital:false,
    showImage:true,
    showHeader:false,
    patientDetails:'',
    hospitalDetails:'',
    showHospitalDetails:false,
    isDonorLogged:false,
    isHospitalLogged:false,
    details:[],
    showButton:true,
 }
 
 export function onSelect(state=initialState,action){
    switch(action.type){
        case 'handleDonor':return{...state,showDonor:action.target};
        case 'handleHospital':return{...state,showHospital:action.target};
        case 'handleButton': return{...state, showButton:action.target};
        case 'handleHeader': return{...state, showHeader:action.target};
        case 'handleDonorLogin': return{...state, isDonorLogged:action.target};
        case 'handleHospitalLogin': return{...state, isHospitalLogged:action.target};
        case 'handlePatientDetails': return{...state, patientDetails:action.target};
        case 'adddNewPatientDetails': return{...state, patientDetails:action.target};
        case 'addDonorDetails': return{...state, details:action.target};
        case 'handleHospitalId': return{...state, hid:action.target};
        case 'handleHospitalDetails': return{...state, hospitalDetails:action.target};
        case 'showHospital': return{...state, showHospitalDetails:action.target};
        
        default:return state;
    }
 }
