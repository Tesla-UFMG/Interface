import React, { Component } from 'react'
import { toast } from 'react-toastify';

const constants = require('./constants.js');


function NotificationBasis(props) {
    return (
        <div className="d-flex notification-container align-items-center">
            <div className="notification-icon">
                {props.icon}
            </div>
            <div className="flex-fill notification-text">{props.text}</div>
        </div>
    )
}

const PortDisconnected = ({ closeToast }) => (
    <NotificationBasis  text={"Porta Serial desconectada!"}
                        icon={<img src="/static/images/usb-unplugged.png"/>}>
    </NotificationBasis>
)

const PortConnected = ({ closeToast }) => (
    <NotificationBasis  text={"Porta Serial conectada!"}
                        icon={<img src="/static/images/usb-plugged.png"/>}>
    </NotificationBasis>
)


const WarningValue = ({closeToast, text}) => (
    <NotificationBasis text={text}
                       icon={<img src="/static/icons/warning-red.png"/>}>
    </NotificationBasis>
)
  
  
function handleNotifications(data) {
    //CONEXAO SERIAL
    // debugger;
    if (!constants.fieldsLimit.shouldNotify) return;

    if (!data.portConnected) {
        if (!toast.isActive(900))
            toast(<PortDisconnected/>, {
                toastId: 900,
                autoClose: false,
                type: toast.TYPE.WARNING,
                closeButton: false,
                draggable: false,
                closeOnClick: false
            });
    } else if (toast.isActive(900)) {
        toast.dismiss(900);
        toast.success(<PortConnected/>);
    }
    // debugger;
    let offLimited = JSON.parse(localStorage.getItem("offLimitFields"));
    // debugger;
    if (offLimited == null)
        offLimited = [];
    if (data.offLimitFields.length == 0) {
        localStorage.clear()
    } else {
        const createOffLimitField = (fieldId, value, added) => {return {fieldId: fieldId, value: value, added: added}};
        //interseção entre os novos campos offlimit que chegaram e os que ja estavam registrados como offlimit
        let finalOffLimited = offLimited.filter(previousOffLimited => data.offLimitFields.some(newOffLimited => newOffLimited.fieldId === previousOffLimited.fieldId));
        data.offLimitFields.forEach(field => {
            //debugger;
            const fIndex = finalOffLimited.findIndex(value => value.fieldId === field.fieldId);
            //se, no armazenamento local, n tiver um aviso, cria um aviso novo
            if (fIndex < 0) {
                finalOffLimited.push(createOffLimitField(field.fieldId, field.value, new Date().getTime()))
                
                let textComp = createOffLimitComponent(field);

                toast(<WarningValue text={textComp}/>, {
                    type: toast.TYPE.ERROR
                })
            //se achou, verifica se ja passou o tempo de expiração. Se tiver passado, notifica novamente
            } else {
                if (new Date().getTime() - finalOffLimited[fIndex].added >= constants.fieldsLimit.notificationExpirationTimeout) {
                    finalOffLimited[fIndex] = createOffLimitField(field.fieldId, field.value, new Date().getTime());
                    // debugger;
                    let textComp = createOffLimitComponent(field);

                    toast(<WarningValue text={textComp}/>, {
                        type: toast.TYPE.ERROR
                    })
                }
            }
        }, this);
        localStorage.setItem('offLimitFields', JSON.stringify(finalOffLimited));
        
    }
}

function createOffLimitComponent(field) {
    let name = constants.mappings.fieldIdNameMap[field.fieldId];
    let fieldName = constants.fieldsLimit.fieldsLimit[name].name;

    let textComp;
    if (typeof constants.fieldsLimit.fieldsLimit[name].max !== 'undefined' && constants.fieldsLimit.fieldsLimit[name].max*(1-constants.fieldsLimit.percentageLimitTolerance/100) <= field.value) {
        // debugger;
        // const intValue = parseInt(field.value);
        // const maxValue = constants.fieldsLimit.fieldsLimit[name].max;
        // const difference = (maxValue-intValue);
        // const decimalPerc = difference/constants.fieldsLimit.fieldsLimit[name].max*100;
        // const perc = parseInt(decimalPerc);
        let perc = parseInt((constants.fieldsLimit.fieldsLimit[name].max-parseInt(field.value))/constants.fieldsLimit.fieldsLimit[name].max*100);
        // debugger;
        textComp = (<span>O campo <span className="notification-field-name">{fieldName}</span> está <span className="notification-value">{(perc <= 0 ? 'ACIMA' : +perc+'% distante')}</span> do valor máximo!</span>)
        
    } else {
        // debugger;
        // let b1 = parseInt(field.value);
        // let b2 = constants.fieldsLimit.fieldsLimit[name].min;
        // let a1 = (b1-b2);
        // let a2 = a1/constants.fieldsLimit.fieldsLimit[name].maxReference*100;
        // let perc = parseInt(a2);
        let perc = parseInt(( parseInt(field.value) - constants.fieldsLimit.fieldsLimit[name].min)/constants.fieldsLimit.fieldsLimit[name].maxReference*100);
        // debugger;
        textComp = (<span>O campo <span className="notification-field-name">{fieldName}</span> está <span className="notification-value">{(perc <= 0 ? 'ABAIXO' : +perc+'% distante')}</span> do valor mínimo!</span>)
    }

    return textComp;
}

export default handleNotifications;