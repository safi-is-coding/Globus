// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=

const imgBox = document.getElementById('imgBox')
const qrImage = document.getElementById('qrImage')
const qrText = document.getElementById('qrText')
const btn = document.getElementById('generateBtn')
const err = document.getElementById('error')



let generateQR = () => {

    if(qrText.value === ''){
        err.style.display = 'block'
        qrImage.style.display = 'none'


        setTimeout(()=>{
            err.style.display = 'none'
        },3000)

    }else{
        qrImage.style.display = 'block'
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${qrText.value}`
    }

}

btn.addEventListener('click', generateQR)