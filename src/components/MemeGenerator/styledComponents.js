// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:100vh;
    padding:15px;
    padding-top:15px;
    padding-bottom:15px;
    padding-left:20px;
    padding-right:20px;
    border:1px solid green;
`

export const MainHead = styled.h1`
    font-family:"roboto";
    font-size:30px;
    font-weight:bold;
    color:#35469c;
`

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    border:1px solid red;
    width:30%;
`
export const Label = styled.label`
    color:#7e858e;
    font-size:16px;
    font-family:"roboto";
    margin-bottom:14px;
`

export const Input = styled.input`
    border:1px solid #5a7184;
    border-radius:7px;
    color:#7e858e;
    margin-bottom:20px;
    padding:15px;
`

export const Select = styled.select`
    border:1px solid #5a7184;
    border-radius:7px;
    color:#7e858e;
    margin-bottom:15px;
    padding:15px;
`

export const SubmitButton = styled.button`
    padding-left:30px;
    padding-right:30px;
    padding-top:12px;
    padding-bottom:12px;
    background-color:#0b69ff;
    color:#ffffff;
    border:none;
    border-radius:7px;
    width:35%;
`

export const BackgroundImage = styled.img`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    height:250px;
    width:300px;
    padding:15px;
    background-image:url(${props => props.backgroundImageUrl});
    bacground-size:cover;
    background-repeat: no-repeat;

`

export const Para = styled.p`
    color:#ffffff;
    font-family:"roboto";
    font-size:${props => props.size};
    font-weight:650;
`
