import { PiGearSixDuotone } from "react-icons/pi";
import { TiDeleteOutline } from "react-icons/ti";
import {refrigeratorAPI} from '../api/refrigeratorAPI'
import CustomModal from './CustomModal'
import CheckModal from './CheckModal'
import {useState} from 'react'
import { useRecoilValue} from 'recoil';
import { loginUserState } from '../recoil/atoms/userState';


function InfoBox({boxName, content, modifybool, deletebool, setName}) {
    const loginUser = useRecoilValue(loginUserState);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCheckOpen, setIsCheckOpen] = useState(false);

 
    const openModal = () => {
      setIsModalOpen(true);
    }
    const closeModal = () => {
      setIsModalOpen(false);
    }

    const closeCheck = () => {
        setIsCheckOpen(false);
    }
    const openCheckModal = () => {
        setIsCheckOpen(true);
    }

    
    
    const modifyRefrigerator = async(req) => {
        try {
            const response = await refrigeratorAPI.edit(req);
            console.log('냉장고 수정 성공', response)
            console.log(req);
            setName(req);
            closeModal();
          } catch (error) {
            alert("수정에 실패했습니다.")
            console.log('냉장고 수정 실패', error);
      
          } 
    }


  

    return (
        <div className="border-2 rounded-xl w-[70vw] mb-5 flex">
        <div className="ml-1 w-[69vw]">
            <div>{boxName}</div>
            <div>{content}</div>
        </div>
        <div className="flex text-3xl py-2">
        {modifybool && (
            <button onClick={openModal}><PiGearSixDuotone/></button>
            )}
        {deletebool && (
            <button onClick={openCheckModal}><TiDeleteOutline/></button>
        )}
        </div>
        <CustomModal bool= {isModalOpen} onClose={closeModal} mainText="냉장고 정보 수정" subText="냉장고 정보" buttonText="수정" placeText="MyFridge" customHandler={modifyRefrigerator}/>
        <CheckModal bool={isCheckOpen} onClose={closeCheck} mainText="냉장고 정보" subText="정말 삭제하시겠습니까?" />
        </div>
    );
  }
  
  export default InfoBox;
