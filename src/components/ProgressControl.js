import { useContext } from 'react';
import rightArrow from '../icons/right-arrow.svg'
import leftArrow from '../icons/left-arrow.svg'
import { CartContext } from '../context/CartContext';
import { PersonalData } from "../context/PersonalContext"

export default function ProgressControl({nextClick,prevClick}) {    
    const {total} = useContext(CartContext)
    function checkClick(){
        console.log(PersonalData)
        alert("已收到訂單，共"+total+"元，姓名："+PersonalData.Name+"，卡號："+PersonalData.CardNum+"，卡片到期日："+PersonalData.Date+"，CVC / CCV："+PersonalData.CvcCcv)
    }
    return(
        <section className="progress-control-container col col-lg-6 col-sm-12">
            <section className="button-group col col-12" data-phase="address">
                <button className="next" onClick={nextClick}>
                    下一步 
                    <img src={rightArrow} className="cursor-point" alt="" />
                </button>
            </section>
            <section className="button-group col col-12" data-phase="shipping">
                <button className="prev" onClick={prevClick}>
                    <img src={leftArrow} className="cursor-point" alt="" />
                    上一步
                </button>
                <button className="next" onClick={nextClick}>
                    下一步
                    <img src={rightArrow} className="cursor-point" alt="" />
                </button>
            </section>
            <section className="button-group col col-12" data-phase="credit-card">
                <button className="prev" onClick={prevClick}>
                    <img src={leftArrow} className="cursor-point" alt="" />
                    上一步
                </button>
                <button className="next" onClick={checkClick}>
                    確認下單
                </button>
            </section>
        </section>
    )
}